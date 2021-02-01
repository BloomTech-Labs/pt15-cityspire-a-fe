import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormButton = props => {
  // notice we don't pass a click handler to this component. It's supposed to be used as a FormButton only.
  // You'd want to use an onSubmit on the Form Element itself to keep your forms organized.
  return (
    <Button
      disabled={props.isDisabled}
      className={props.classType || 'primary'}
    >
      {props.buttonText}
    </Button>
  );
};

export default FormButton;

FormButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  classType: PropTypes.string,
  disabled: PropTypes.string,
};

const Button = styled.button`
  height: 32px;
  padding: 4px 15px;
  font-size: 14px;
  border-radius: 2px;
  color: #ec3944;
  background: #fff;
  border-color: #ec3944;
  cursor: pointer;
  height: 45px;
  border: 0.5px solid #d9d9d9;
  color: rgba(0, 0, 0, 0.65);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover {
    border: 0.5px solid #ec3944;
    color: #ec3944;
  }
  @media (min-width: 768px) {
    height: 52px;
    margin-left: 5px;
  }

  &:focus {
    background-color: #ec3944;
    color: #fff;
    outline: none;
  }
`;
