import styled from 'styled-components';
import { remCalc } from 'components/helpers/Calc';

const ListItem = styled.li`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr 1fr 1fr;
  border: ${remCalc(1)} solid #e6e6e6;
  border-radius: ${remCalc(8)};
  margin: ${remCalc(10)};
  padding: ${remCalc(10)} ${remCalc(20)};
  transition: background-color 0.2s;
  transition: border-color 0.2s;
  @media (max-width: 999px) {
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: inherit;
  }

  &:hover {
    background-color: #f1f1f1;
    transition: background-color 1s;
    transition: border-color 1.8s;
    border: ${remCalc(1)} solid #5f5f5f;
  }
  &:nth-child(2n + 1) {
    background-color: #f7f7f7;
    &:hover {
      background-color: #f1f1f1;
      transition: background-color 1s;
      transition: border-color 1.8s;
      border: ${remCalc(1)} solid #5f5f5f;
    }
  }
`;

export default ListItem;
