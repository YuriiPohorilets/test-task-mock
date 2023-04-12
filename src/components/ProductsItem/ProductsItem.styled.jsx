import styled from 'styled-components';

export const Item = styled.li`
  padding: 16px;
  flex-basis: calc((100% - 32px) / 3);

  background-color: var(--bg);
  border-radius: 8px;

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
`;

export const Title = styled.p`
  margin-bottom: 16px;

  width: 300px;

  font-size: 24px;
  color: var(--neutral);
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 8px;

  overflow: hidden;

  cursor: zoom-in;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  transition: all 300ms ease-in-out;
  filter: grayscale(0.5);

  :hover {
    transform: scale(1.03);
    filter: grayscale(0);
  }
`;

export const Content = styled.div`
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
`;

export const Description = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #fff;
`;

export const Value = styled.span`
  font-size: 18px;
  color: #fff;
`;

export const ButtonLink = styled.a`
  display: block;
  padding: 12px 32px;
  width: 100%;

  font-size: 18px;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.7);

  background-color: transparent;

  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 8px;

  transition: all 250ms ease-in-out;

  cursor: pointer;

  :hover {
    color: var(--neutral);
    border: 1px solid rgba(255, 255, 255, 1);
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
