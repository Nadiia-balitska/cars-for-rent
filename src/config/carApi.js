import axios from "axios";

export const carApi = axios.create({
  baseURL: "https://66818a7004acc3545a06f8a4.mockapi.io/adverts",
});

// export const fetchAll = async () => {
//   try {
//     const { data } = await axios.get(`${carApi}/adverts`);
//   } catch (error) {}
// };
