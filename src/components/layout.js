import * as React from "react";
import styled from "@emotion/styled";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";

export const LayoutWrapper = styled("div")`
  height: 100vh;
  width: 100vw;
`;

export function Layout({ children }) {
  return (
    <>
      <LayoutWrapper>
        <h3>My Fortunes</h3>
        <Link to="/form">
          <Button
            size="large"
            shape="circle"
            icon={<PlusCircleOutlined />}
          ></Button>
        </Link>

        {children}
      </LayoutWrapper>
    </>
  );
}
