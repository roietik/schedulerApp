import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Param from 'components/atoms/List/Param';
import ListItem from 'components/atoms/List/ListItem';
import PropTypes from 'prop-types';

const ListWrapper = styled.ul`
  max-width: 1024px;
  padding: 0;
  margin: 0 auto;
  margin-top: 76px;
`;

const Action = styled(Param)`
  justify-self: right;
  align-self: center;
`;

const Trigger = styled(Button)`
  line-height: 20px;
  &:first-child {
    margin-right: 6px;
  }
`;

const MainList = ({ data, page }) => (
  <ListWrapper>
    {data.map((item, index) => {
      const { name, quantity, category, limit, j } = item;
      return (
        <ListItem key={name}>
          <Param className="red">
            <strong>Name: </strong>
            {name.toUpperCase()}
          </Param>
          <Param>
            <strong> Quantity: </strong>
            {quantity}
            {j}
          </Param>
          <Param>
            <strong> Category: </strong>
            {category.toUpperCase()}
          </Param>
          <Param>
            <strong> Limit: </strong>
            {limit}
            {j}
          </Param>
          <Action>
            <Trigger
              as={Link}
              to={`${page}/delete/${page === 'pantry' ? item.id : index}`}
              secondary={1}
            >
              Remove
            </Trigger>
            <Trigger as={Link} to={`${page}/edit/${page === 'pantry' ? item.id : index}`}>
              Edit
            </Trigger>
          </Action>
        </ListItem>
      );
    })}
  </ListWrapper>
);

MainList.defaultProps = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: 'name',
      quantity: 0,
      category: 'category',
      limit: 0,
    }),
  ),
  page: '404',
};

MainList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      quantity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      category: PropTypes.string,
      limit: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),
  ),
  page: PropTypes.string,
};

export default MainList;
