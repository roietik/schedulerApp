import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Expenses extends Component {
  state = {
    data: '',
    limits: [],
  };

  render() {
    return <p>url</p>;
  }
}

const mapStateToProps = ({ data }) => ({ data });

Expenses.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      quantity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      category: PropTypes.string,
      limit: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),
  ).isRequired,
};

export default connect(mapStateToProps)(Expenses);
