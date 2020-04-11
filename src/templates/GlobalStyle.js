import { createGlobalStyle } from 'styled-components';

const Main = createGlobalStyle`
  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
  }
  li {
    list-style: none;
  }
  select {
  -webkit-appearance: none;
  background: transparent;
}

select:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
}
  div {
    margin: 0;
    padding: 0;
  }

  button, a {
  display: inline-block;
  appearance: none;
  margin: 10px 0;
  padding: 0px;
  height: 50px;
  border-width: 0;
  color: #000;
  font-family: sans-serif;
  text-decoration: none;
  line-height: 22px;
  text-align: center;
  cursor: pointer;

}
`;

export default Main;
