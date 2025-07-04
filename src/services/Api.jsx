import axios from "axios";

const baseUrl = import.meta.env.DEV
  ? "/api/EvApp"
  : import.meta.env.VITE_BASE_URL;

export const getChargingStatus = async () => {
  return await axios.get(`${baseUrl}/ChargingStatus`);
};
