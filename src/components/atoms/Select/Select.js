import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SelectWrapper = styled.select`
  margin-top: 6px;
  margin-bottom: 2px;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: 600;
  background-color: #e6e6e6;
  border: none;
  border-radius: 50px;
  outline: none;
  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: gray;
  }
`;

const predefinedOptions = ['kg', 'g', 'l', 'szt'];

const Select = ({ options = predefinedOptions, name, values, handleChange, handleBlur }) => {
  return (
    <SelectWrapper name={name} value={values} onChange={handleChange} onBlur={handleBlur}>
      {options.map((item) => {
        return (
          <option key={item} value={item} label={item}>
            {item}
          </option>
        );
      })}
    </SelectWrapper>
  );
};
Select.defaultProps = {
  options: predefinedOptions,
  name: 'name',
  values: 'value',
  handleChange: () => 'onChange',
  handleBlur: () => 'handleBlur',
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  values: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  handleChange: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  handleBlur: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

export default Select;
