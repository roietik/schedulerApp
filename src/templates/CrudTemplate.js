import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CrudWrapper = styled.div`
  max-width: 600px;
  padding: 0 20px;
  margin: 0 auto;
  margin-top: 96px;
`;

const CrudTemplate = ({ children }) => {
  return <CrudWrapper>{children}</CrudWrapper>;
};

CrudTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.string])
    .isRequired,
};

export default CrudTemplate;
