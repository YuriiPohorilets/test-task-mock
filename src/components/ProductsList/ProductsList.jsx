import { nanoid } from 'nanoid';
import { ProductsItem } from 'components/ProductsItem/ProductsItem';
import { Container } from 'shared/Container';
import { List } from './ProductsList.styled';

export const ProductsList = ({ products }) => {
  return (
    <Container>
      <List>
        {products.map(product => {
          return <ProductsItem key={nanoid()} product={product} />;
        })}
      </List>
    </Container>
  );
};
