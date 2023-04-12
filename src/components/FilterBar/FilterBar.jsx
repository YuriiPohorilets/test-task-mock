import { Container } from 'shared/Container';
import { StatusBar } from 'components/StatusBar/StatusBar';
import { Wrapper, Content, Input } from './FilterBar.styled';

export const FilterBar = ({ onChange, value, counter }) => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Input
            type="text"
            name="filter"
            value={value}
            onChange={onChange}
            placeholder={'Enter product name...'}
          />

          <StatusBar counter={counter} />
        </Content>
      </Container>
    </Wrapper>
  );
};
