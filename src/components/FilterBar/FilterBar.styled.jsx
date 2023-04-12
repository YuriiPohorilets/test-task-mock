import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 32px;
  padding: 24px 0;

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  border: 1px solid rgba(255, 255, 255, 0.3);

  backdrop-filter: blur(5px);
`;

export const Content = styled.div`
  display: flex;
  gap: 36px;
  align-items: center;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  padding: 8px 16px;
  width: 40%;

  font-size: 24px;
  color: rgba(255, 255, 255, 0.7);

  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);

  transition: all 300ms ease-in-out;

  outline: none;

  ::placeholder {
    font-size: 22px;
    color: var(--neutral);
    opacity: 0.6;
  }

  &:not(:placeholder-shown) {
    color: var(--neutral);
    border: 1px solid rgba(255, 255, 255, 1);
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:hover,
  &:focus {
    color: var(--neutral);
    border: 1px solid rgba(255, 255, 255, 1);
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
