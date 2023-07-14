import { APIClient } from "~/keelClient";

export const getKeelServer = () =>
  new APIClient({
    endpoint: "http://localhost:8000/web",
  });
