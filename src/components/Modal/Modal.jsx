import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalViewer, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ closeModal, tags, modalImg }) => {
  useEffect(() => {
    const closeByEsc = e => {
      if (e.code !== 'Escape') {
        return;
      }
      closeModal();
    };

    window.addEventListener('keydown', closeByEsc);

    return () => {
      window.removeEventListener('keydown', closeByEsc);
    };
  }, [closeModal]);

  return createPortal(
    <Overlay onClick={closeModal}>
      <ModalViewer>
        <ModalImg src={modalImg} alt={tags} />
      </ModalViewer>
    </Overlay>,
    modalRoot
  );
};
