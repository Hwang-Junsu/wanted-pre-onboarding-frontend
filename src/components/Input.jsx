import React from "react";
import {forwardRef} from "react";
import styled from "styled-components";

const Input = forwardRef(
  ({type, value, onChange, placeholder, required = true, dataTestid}, ref) => {
    return (
      <StyledInput
        type={type}
        value={value || ""}
        ref={ref}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        data-testid={dataTestid}
      />
    );
  }
);

export default Input;

const StyledInput = styled.input`
  width: 100%;
  padding: 15px 30px;
  border: 1px solid gray;
  border-radius: 20px;
  outline: none;
  &:focus {
    border: 2px solid black;
  }
`;
