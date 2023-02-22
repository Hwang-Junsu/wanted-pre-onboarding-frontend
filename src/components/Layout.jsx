import React from "react";
import styled from "styled-components";

export default function Layout({children}) {
  return <StyledLayout>{children}</StyledLayout>;
}

const StyledLayout = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 580px;
  width: 100%;
  height: 100vh;
  margin: auto;
  background-color: white;
`;
