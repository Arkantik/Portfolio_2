import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const getAllProjects = async () => {
  try {
    const url = `${baseUrl}/project`;
    const { data } = await axios(url);

    // Convert the comma-separated 'techno_images' to an array of strings
    const TechnoImagesArray = data.map((project) => ({
      ...project,
      techno_images: project.techno_images.split(","),
    }));

    return TechnoImagesArray;
  } catch (error) {
    return [];
  }
};

export const modifyProjectById = (body, id) =>
  axios.put(`${baseUrl}/project/${id}`, body);

// export const addProjectImage = (form) =>
//   axios.post(`${baseUrl}/upload/images/project`, form);

export const addProject = (body) => axios.post(`${baseUrl}/project/`, body);

export const deleteProject = (id) => axios.delete(`${baseUrl}/project/${id}`);

export const addProjectTechno = (body) =>
  axios.post(`${baseUrl}/video-category/`, body);

export const deleteProjectTechno = (id) =>
  axios.delete(`${baseUrl}/video-category/${id}`);
