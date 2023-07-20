import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const getAllTechnos = async () => {
  try {
    const url = `${baseUrl}/techno`;
    const { data } = await axios(url);
    return data;
  } catch (error) {
    return { data: [] };
  }
};

export const modifyTechnoById = (body, id) =>
  axios.put(`${baseUrl}/techno/${id}`, body);

export const addTechno = (body) => axios.post(`${baseUrl}/techno`, body);

export const deleteTechno = (id) => axios.delete(`${baseUrl}/techno/${id}`);
