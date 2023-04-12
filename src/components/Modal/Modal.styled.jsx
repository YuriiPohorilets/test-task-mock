import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
`;

export const ModalViewer = styled.div`
  width: 50vw;
  height: 50vh;

  background-color: transparent;

  border-radius: 16px;
  overflow: hidden;
`;

export const ModalImg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: contain;
`;
