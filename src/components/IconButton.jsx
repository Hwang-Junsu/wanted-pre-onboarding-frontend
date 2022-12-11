import React from "react";
import styled from "styled-components";

export default function IconButton({ children, onClick }) {
  return <StyledIconButton onClick={onClick}>{children}</StyledIconButton>;
}

const StyledIconButton = styled.button`
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 30px;
  height: 30px;
  background-color: white;
`;
