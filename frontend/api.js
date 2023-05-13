import { Client } from "@gadget-client/foraicast";

export const api = new Client({ environment: window.gadgetConfig.environment });
