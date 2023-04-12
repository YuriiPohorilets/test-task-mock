import { Title, Value } from './StatusBar.styled';

export const StatusBar = ({ counter }) => {
  return (
    <div>
      <Title>Number of products:</Title>
      <Value>{counter}</Value>
    </div>
  );
};
