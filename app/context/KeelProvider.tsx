import React, { createContext, useContext, Context } from "react";
import { APIClient } from "~/keelClient";

const KeelContext = createContext({
  client: null,
}) as Context<{ client: APIClient | null }>;

export const KeelProvider = ({ children }) => {
  const client = new APIClient({
    endpoint: "http://localhost:8000/web",
  });

  return (
    <KeelContext.Provider value={{ client }}>{children}</KeelContext.Provider>
  );
};

export const useKeel = () => useContext(KeelContext);
