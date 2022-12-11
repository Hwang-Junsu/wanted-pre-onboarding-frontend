import React from "react";
import styled from "styled-components";

export default function Input({
  type,
  value,
  onChange,
  placeholder,
  required = true,
}) {
  return (
    <StyledInput
      type={type}
      value={value || ""}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
  );
}

const StyledInput = styled.input`
  padding: 15px 30px;
  border: 1px solid gray;
  border-radius: 20px;
  outline: none;
  &:focus {
    border: 2px solid purple;
  }
`;
