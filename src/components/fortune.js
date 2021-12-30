import * as React from "react";
import styled from "@emotion/styled";
import { Dates } from "./Dates";
import { useHcContext } from "../context";
import moment from "moment";

export const FortuneWrapper = styled("div")`
  display: flex;
  color: black;
  text-align: left;
  border: 1px solid blue;
  justify-content: space-between;
  flex-basis: auto;
  flex-wrap: wrap;
  align-items: center;
`;

export const FortuneItem = styled("div")`
  flex-wrap: wrap;
  color: white;

  margin: 5px;
  padding: 5%;
  border-radius: 10px;
  background-color: #5a34f3;
  font-size: 13px;
  font-weight: 700;
  border: 1px solid black;
  flex-grow: 2;
`;

export function Fortune() {
  const { hcContext } = useHcContext();
  const data = hcContext.data.fortunes;

  const transformedDatesArray = data.map((e) => {
    return {
      text: e.text,
      date: moment(e.date).format("MMMM Do YYYY"),
    };
  });
  return (
    <>
      <FortuneWrapper>
        {transformedDatesArray.map((e, i) => (
          <FortuneItem key={i}>
            <p>{e.text}</p>
            <Dates date={e.date} />
          </FortuneItem>
        ))}
      </FortuneWrapper>
    </>
  );
}
