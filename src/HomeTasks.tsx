import { useEffect } from 'react';
import { Task, TASKS_API_URL } from './config';
import { TasksBar } from './TasksBar';
import { TasksList } from './TasksList';
import { useCached, useLogin } from './utils';
import styled from 'styled-components';

const TasksMainDiv = styled.div`
  width: var(--section-width);
  height: var(--homesearch-height);

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 608px) {
    & {
      height: min-content;
      margin: 0 0 60px 0;
    }
  }
`;

export default function HomeTasks() {
  const [tasks, setTasks] = useCached<Task[]>('tasks', []);
  const [completed, setCompleted] = useCached<Task[]>('completed', []);
  const { logUser } = useLogin();

  useEffect(() => {
    if (logUser !== null)
      fetch(`${TASKS_API_URL}?completed=false`, {
        method: 'GET',
        credentials: 'same-origin',
      })
        .then((res) => res.json())
        .then((data) => setTasks(data.tasks))
        .catch((e) => console.log(e));
  }, [logUser, setTasks]);

  useEffect(() => {
    if (logUser !== null)
      fetch(`${TASKS_API_URL}?completed=true`, {
        method: 'GET',
        credentials: 'same-origin',
      })
        .then((res) => res.json())
        .then((data) => setCompleted(data.tasks))
        .catch((e) => console.log(e));
  }, [logUser, setCompleted]);

  return (
    <TasksMainDiv id="tasksmain">
      <TasksBar />
      <TasksList
        tasks={tasks}
        setTasks={setTasks}
        completed={completed}
        setCompleted={setCompleted}
      />
    </TasksMainDiv>
  );
}