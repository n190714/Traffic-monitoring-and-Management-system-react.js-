const TRAFFIC_DATA_KEY = 'traffic_data';

export const getTrafficData = async () => {
  const data = localStorage.getItem(TRAFFIC_DATA_KEY);
  return data ? JSON.parse(data) : {};
};

export const saveTrafficData = async (data) => {
  localStorage.setItem(TRAFFIC_DATA_KEY, JSON.stringify(data));
};

export const clearTrafficData = async () => {
  localStorage.removeItem(TRAFFIC_DATA_KEY);
};
