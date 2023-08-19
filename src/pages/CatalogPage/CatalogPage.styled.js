import { StyledButton } from 'components/Button/Button.styled';
import { styled } from 'styled-components';

export const StyledCatalog = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin: 50px auto 100px auto;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoadButton = styled(StyledButton)`
  margin: 0 auto;
  width: 120px;
  padding: 12px;
`;
