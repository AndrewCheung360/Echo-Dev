import Constants from "expo-constants";

const extra = Constants.expoConfig?.extra ?? {};

/** Backend API URL — reads from Doppler via app.config.ts */
export const API_URL: string = extra.apiUrl || "http://localhost:8000";

/** EchoPrism Agent URL — reads from Doppler via app.config.ts */
export const AGENT_URL: string = extra.agentUrl || API_URL;
