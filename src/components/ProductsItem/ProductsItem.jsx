import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import {
  Item,
  Title,
  ImgWrapper,
  Img,
  Content,
  ContentWrapper,
  Description,
  Value,
  ButtonLink,
} from './ProductsItem.styled';

export const ProductsItem = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { name, img, asin, price, bsr_category, link } = product;

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <Item>
      <Title>{name}</Title>

      <ImgWrapper>
        <Img src={img} alt={name} onClick={toggleModal} />
      </ImgWrapper>

      <Content>
        <ContentWrapper>
          <Description>Category:</Description>
          <Value>{bsr_category}</Value>
        </ContentWrapper>

        <ContentWrapper>
          <Description>Product code:</Description>
          <Value>{asin}</Value>
        </ContentWrapper>

        <ContentWrapper>
          <Description>Price:</Description>
          <Value>$ {price}</Value>
        </ContentWrapper>
      </Content>

      <ButtonLink href={link} target="_blank">
        Learn more
      </ButtonLink>

      {isModalOpen && <Modal modalImg={img} closeModal={toggleModal} />}
    </Item>
  );
};
