import * as React from "react";

import { Paths } from "./Interfaces/Paths";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";
import { AppContext } from "./context";
import { Fortune } from "./components/fortune";
import { Form } from "./components/form";

function App() {
  return (
    <AppContext>
      <Main />
    </AppContext>
  );
}

function Main() {
  return (
    <>
      <Layout>
        <Routes>
          <Route exact path={Paths.fortune} element={<Fortune />} />
          <Route path={Paths.form} element={<Form />} />
        </Routes>
      </Layout>
    </>
  );
}
export default App;
