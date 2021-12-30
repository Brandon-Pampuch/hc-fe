import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import * as data from "../Data/data.json";
import { BrowserRouter as Router } from "react-router-dom";

export const HcContext = React.createContext({
  HcContext: {
    fortunes: {},
  },
  setHcContext: () => null,
});

HcContext.displayName = "HcContext";

const queryClient = new QueryClient();

export const initialState = {
  data: data,
};

function AppContext({ children }) {
  const [hcContext, setHcContext] = React.useState(initialState);
  return (
    <HcContext.Provider value={{ hcContext, setHcContext }}>
      <QueryClientProvider client={queryClient}>
        <Router>{children}</Router>
      </QueryClientProvider>
    </HcContext.Provider>
  );
}

function useHcContext() {
  return React.useContext(HcContext);
}

export { AppContext, queryClient, useHcContext };
