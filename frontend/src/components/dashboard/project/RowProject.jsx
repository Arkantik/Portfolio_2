// Packages
import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

// Components
import DropdownProject from "./DropdownProject";

// Hooks
import useAxios from "../../../hooks/useAxios";

// Services
import * as Services from "../../../services/project.service";

// Helpers
import { capitalizeText } from "../../../helpers/getName";

export default function RowProject({ project, setFlagProjects }) {
  const [isToggled, setIsToggled] = useState(false);

  // fetch data from database to populate dropdown items
  const { data: technos } = useAxios("/techno");
  const { data: categories } = useAxios("/categories");

  const TOAST_DEFAULT_CONFIG = {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "dark",
  };

  const handleDeleteVideo = (id) => {
    Services.deleteProject(id)
      .then((res) => {
        if (res?.status === 204)
          toast.success("Project successfully deleted!", TOAST_DEFAULT_CONFIG);
        setFlagProjects((prev) => !prev);
      })
      .catch((err) => {
        console.error(err);
        if (err.response.status === 404) {
          toast.error(`${err.response.data}`, TOAST_DEFAULT_CONFIG);
        } else {
          toast.error(`${err.response.statusText}!`, TOAST_DEFAULT_CONFIG);
        }
      });
  };

  return (
    <>
      <tr className="dark:border-neutral border-b">
        <td className="px-4 py-3 text-sm">{project.projectid}</td>
        <td className="px-4 py-3 text-sm">{capitalizeText(project.name)}</td>
        {project.img.length ? (
          <td className="px-4 py-3 text-sm">
            <img
              src={
                `${import.meta.env.VITE_BACKEND_URL}/uploads/images/projects/${
                  project.img
                }` || "-"
              }
              alt={project.tool}
              className="w-20 rounded"
            />
          </td>
        ) : (
          <td className="flex h-full items-center justify-center px-4 py-3 text-sm">
            -
          </td>
        )}
        {project.github.length ? (
          <td className="px-4 py-3 text-sm">
            <a
              href={project.github}
              className="hover:text-primary"
              target="_blank"
              rel="noreferrer"
            >
              Repo redirection
            </a>
          </td>
        ) : (
          <td className="px-4 py-3 text-sm">-</td>
        )}
        {project.website.length ? (
          <td className="px-4 py-3 text-sm">
            <a
              href={project.website}
              className="hover:text-primary"
              target="_blank"
              rel="noreferrer"
            >
              Website redirection
            </a>
          </td>
        ) : (
          <td className="px-4 py-3 text-sm">-</td>
        )}
        {project.tool.length ? (
          <td className="px-4 py-3 text-sm">
            <img src={project.tool || "-"} alt={project.tool} />
          </td>
        ) : (
          <td className="px-4 py-3 text-sm">-</td>
        )}
        {project.techno_images.length ? (
          <td className="px-4 py-3 text-sm">
            {project.techno_images.map((imgSrc) => (
              <img
                key={imgSrc}
                src={`${
                  import.meta.env.VITE_BACKEND_URL
                }/uploads/images/technos/${imgSrc}`}
                alt="Technology"
                className="m-2 inline-flex max-w-[35px]"
              />
            ))}
          </td>
        ) : (
          <td className="px-4 py-3 text-sm">-</td>
        )}
        <td className="px-4 py-3 text-sm">
          <span className="flex h-full w-full gap-4 ">
            <button
              type="button"
              className="group"
              onClick={() => setIsToggled(!isToggled)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7157 7.51667L12.4824 8.28333L4.93236 15.8333H4.16569V15.0667L11.7157 7.51667ZM14.7157 2.5C14.5074 2.5 14.2907 2.58333 14.1324 2.74167L12.6074 4.26667L15.7324 7.39167L17.2574 5.86667C17.5824 5.54167 17.5824 5.01667 17.2574 4.69167L15.3074 2.74167C15.1407 2.575 14.9324 2.5 14.7157 2.5ZM11.7157 5.15833L2.49902 14.375V17.5H5.62402L14.8407 8.28333L11.7157 5.15833Z"
                  fill="#F5F5F5"
                  className="group-hover:fill-yellow-300"
                />
              </svg>
            </button>
            <button
              type="button"
              className="group"
              onClick={() => handleDeleteVideo(project.projectid)}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.33333 1.33333C0.979711 1.33333 0.640573 1.47381 0.390524 1.72386C0.140476 1.97391 0 2.31304 0 2.66667V4C0 4.35362 0.140476 4.69276 0.390524 4.94281C0.640573 5.19286 0.979711 5.33333 1.33333 5.33333H2V17.3333C2 18.0406 2.28095 18.7189 2.78105 19.219C3.28115 19.719 3.95942 20 4.66667 20H12.6667C13.3739 20 14.0522 19.719 14.5523 19.219C15.0524 18.7189 15.3333 18.0406 15.3333 17.3333V5.33333H16C16.3536 5.33333 16.6928 5.19286 16.9428 4.94281C17.1929 4.69276 17.3333 4.35362 17.3333 4V2.66667C17.3333 2.31304 17.1929 1.97391 16.9428 1.72386C16.6928 1.47381 16.3536 1.33333 16 1.33333H11.3333C11.3333 0.979711 11.1929 0.640573 10.9428 0.390524C10.6928 0.140476 10.3536 0 10 0L7.33333 0C6.97971 0 6.64057 0.140476 6.39052 0.390524C6.14048 0.640573 6 0.979711 6 1.33333H1.33333ZM5.33333 6.66667C5.51014 6.66667 5.67971 6.73691 5.80474 6.86193C5.92976 6.98695 6 7.15652 6 7.33333V16.6667C6 16.8435 5.92976 17.013 5.80474 17.1381C5.67971 17.2631 5.51014 17.3333 5.33333 17.3333C5.15652 17.3333 4.98695 17.2631 4.86193 17.1381C4.7369 17.013 4.66667 16.8435 4.66667 16.6667V7.33333C4.66667 7.15652 4.7369 6.98695 4.86193 6.86193C4.98695 6.73691 5.15652 6.66667 5.33333 6.66667ZM8.66667 6.66667C8.84348 6.66667 9.01305 6.73691 9.13807 6.86193C9.2631 6.98695 9.33333 7.15652 9.33333 7.33333V16.6667C9.33333 16.8435 9.2631 17.013 9.13807 17.1381C9.01305 17.2631 8.84348 17.3333 8.66667 17.3333C8.48986 17.3333 8.32029 17.2631 8.19526 17.1381C8.07024 17.013 8 16.8435 8 16.6667V7.33333C8 7.15652 8.07024 6.98695 8.19526 6.86193C8.32029 6.73691 8.48986 6.66667 8.66667 6.66667ZM12.6667 7.33333V16.6667C12.6667 16.8435 12.5964 17.013 12.4714 17.1381C12.3464 17.2631 12.1768 17.3333 12 17.3333C11.8232 17.3333 11.6536 17.2631 11.5286 17.1381C11.4036 17.013 11.3333 16.8435 11.3333 16.6667V7.33333C11.3333 7.15652 11.4036 6.98695 11.5286 6.86193C11.6536 6.73691 11.8232 6.66667 12 6.66667C12.1768 6.66667 12.3464 6.73691 12.4714 6.86193C12.5964 6.98695 12.6667 7.15652 12.6667 7.33333Z"
                  fill="#F5F5F5"
                  className="group-hover:fill-red-300"
                />
              </svg>
            </button>
          </span>
        </td>
      </tr>
      {isToggled && (
        <DropdownProject
          videoId={project.projectid}
          technos={technos}
          categories={categories}
          toggleRow={setIsToggled}
          setFlagProjects={setFlagProjects}
        />
      )}
    </>
  );
}

RowProject.propTypes = {
  project: PropTypes.shape({
    projectid: PropTypes.number,
    name: PropTypes.string,
    img: PropTypes.string,
    github: PropTypes.string,
    website: PropTypes.string,
    tool: PropTypes.string,
    techno_images: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  }).isRequired,
  setFlagProjects: PropTypes.func,
};

RowProject.defaultProps = { setFlagProjects: null };
