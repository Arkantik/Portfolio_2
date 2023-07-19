// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const getAllProjects = async () => {
  try {
    const url = `${baseUrl}/projects`;
    const { data } = await axios(url);
    return data;
  } catch (error) {
    return { data: [] };
  }
};

export default getAllProjects;
