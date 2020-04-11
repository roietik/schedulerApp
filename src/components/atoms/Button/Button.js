import styled, { css } from 'styled-components';
import { remCalc, emCalc } from 'components/helpers/Calc';

const Button = styled.button`
  padding: 0;
  background-color: #e6e6e6;
  /* width: ${({ width }) => remCalc(width) || remCalc(200)}; */
  width: ${remCalc(105)};
  height: ${remCalc(30)};
  border: none;
  border-radius: ${remCalc(50)};
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: ${emCalc(10)};
  text-transform: uppercase;
  ${({ secondary }) =>
    secondary &&
    css`
      background-color: #8ace76;
      width: ${remCalc(105)};
      height: ${remCalc(30)};
      font-size: ${emCalc(10)};
    `}
`;

export default Button;
