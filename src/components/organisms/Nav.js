import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Param from 'components/atoms/List/Param';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThList } from '@fortawesome/free-solid-svg-icons';

const MenuWrapper = styled.div`
  max-height: 90px;
  max-width: 1024px;
  margin: 0 auto;
  background-color: #8ace76;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 10px 20px;
  position: fixed;
  width: 100%;
  top: 0;
  display: grid;
  grid-template-columns: 225px auto 50px;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 6px;
`;

const HeaderTitle = styled.h2`
  margin: 0;
  align-self: center;
`;

const Menu = styled.div`
  @media (max-width: 580px) {
    display: grid;
    grid-template-rows: repeat() 2, 1fr;
  }
`;

const Item = styled(Param)`
  padding-left: 10px;
  padding-right: 10px;
  line-height: 56px;

  color: black;
  &:first-child {
    padding-left: 0;
  }
  @media (max-width: 580px) {
    padding: 0;
    margin: 0;
    height: auto;
    line-height: 20px;
  }
`;

const Nav = () => {
  return (
    <MenuWrapper>
      <HeaderTitle>
        <Icon icon={faThList} size="1x" /> SchedulerApp
      </HeaderTitle>
      <Menu>
        <Item as={Link} to="/scheduler">
          Scheduler
        </Item>
        <Item as={Link} to="/expenses">
          Expenses
        </Item>
      </Menu>
    </MenuWrapper>
  );
};

export default Nav;
