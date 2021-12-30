import * as React from "react";
import styled from "@emotion/styled";

export const DateWrapper = styled("div")`
  display:flex;
  background-color: 
  margin-top: 40px;
  padding: 2px;
  color: white;
  border: 3px solid white;
  width: 200px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export function Dates(props) {
  return (
    <>
      <DateWrapper>
        <p>{props.date}</p>
      </DateWrapper>
    </>
  );
}
