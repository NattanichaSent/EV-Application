import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getChargingStatus = async () => {
  return await axios.get('/api/ChargingStatus');
};
