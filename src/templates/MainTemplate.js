import React from 'react';
import Nav from 'components/organisms/Nav';
import GlobalStyle from 'templates/GlobalStyle';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainWrapper = styled.div`
  max-width: 1024px;
  padding: 0;
  margin: 0 auto;
  margin-top: 96px;
`;

const MainTemplate = ({ children }) => {
  return (
    <MainWrapper>
      <GlobalStyle />
      <Nav />
      {children}
    </MainWrapper>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
