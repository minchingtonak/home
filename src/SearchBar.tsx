import { useCallback, useEffect, useRef, useState } from 'react';
import DayPicker from 'react-day-picker';
import styled from 'styled-components';
import { useGoogleAPI } from './auth';
import {
  DEFAULT_SEARCH_URL,
  DEFAULT_TAB_TITLE,
  NOTE_TAB_PREFIX,
  option,
  SEARCH_TAB_PREFIX,
} from './config';
import { getValidURL, useAddTask } from './utils';

const SearchInput = styled.input`
  margin: 0px 2px 2px 2px;
  padding-left: 5px;
  box-sizing: border-box;

  border: none;
  width: var(--lwidth);
  height: 50px;

  font-size: 40px;
  background-color: var(--frg);
  color: var(--txt);
  font-family: Terminus, Montserrat;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 912px) {
    & {
      width: var(--mwidth);
    }
  }

  @media screen and (max-width: 608px) {
    & {
      width: var(--swidth);
    }
  }
`;

const SearchDatePicker = styled(DayPicker)<{ open: boolean }>`
  display: ${(props) => (props.open ? 'default' : 'none')} !important;
`;

export default function SearchBar({
  text,
  setText,
  action,
}: {
  text: string;
  setText: (s: string) => void;
  action: option<string>;
}) {
  const input = useRef<HTMLInputElement>(null);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [taskText, setTaskText] = useState<option<string>>(null);
  const { addTask } = useAddTask();
  const { loggedIn, logOut, logIn } = useGoogleAPI();

  // useEffect(() => {
  //   // Clikcing on anything except a link will focus the search bar
  //   (document.querySelector('body') as HTMLBodyElement).onclick = (e) => {
  //     if (input && input.current) input.current.focus();
  //   };
  // }, [input]);

  const updateTitle = useCallback(
    (start: string) => {
      if (text.length) document.title = `${start} - ${text}`;
      else document.title = DEFAULT_TAB_TITLE;
    },
    [text],
  );

  useEffect(() => {
    updateTitle(SEARCH_TAB_PREFIX);
  }, [text, updateTitle]);

  useEffect(() => {
    const blurCallback = updateTitle.bind(null, NOTE_TAB_PREFIX),
      focusCallback = updateTitle.bind(null, SEARCH_TAB_PREFIX);

    window.addEventListener('blur', blurCallback);
    window.addEventListener('focus', focusCallback);

    return () => {
      window.removeEventListener('blur', blurCallback);
      window.removeEventListener('focus', focusCallback);
    };
  }, [updateTitle]);

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setPickerOpen(false);
    });
  });

  return (
    <>
      <form
        id={'action'}
        onSubmit={(e) => {
          e.preventDefault();

          if (/^\/t(ask)?/.test(text)) {
            const matches = text.match(/[\s].*/g);
            setTaskText(matches !== null ? matches[0].trim() : null);
            setPickerOpen(true);
          } else if (/^\/login/.test(text)) {
            if (loggedIn) return;
            logIn();
            setText('');
          } else if (/^\/logout/.test(text)) {
            if (!loggedIn) return;
            logOut();
            setText('');
            window.localStorage.clear();
          } else {
            window.location.assign(
              action !== null
                ? getValidURL(action)
                : `${DEFAULT_SEARCH_URL}?q=${encodeURIComponent(text)}`,
            );
          }
        }}
      >
        <SearchInput
          type="text"
          value={text}
          ref={input}
          autoFocus
          autoComplete="off"
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <SearchDatePicker
        selectedDays={new Date()}
        open={pickerOpen}
        onDayClick={(d) => {
          if (taskText !== null && d) {
            addTask({ title: taskText, due: d.toISOString() });
            setText('');
          }
          setPickerOpen(false);
        }}
      />
    </>
  );
}
