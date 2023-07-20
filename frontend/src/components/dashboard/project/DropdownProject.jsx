// Packages
import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

// Components
import Input from "../../utilities/Input";
import Dropdown from "../../utilities/Dropdown";
import Label from "../../utilities/Label";

// Helpers
import {
  updateFromInput,
  updateFromFileInput,
  updateFromDropdownRadio,
  updateFromDropdownCheckbox,
} from "../../../helpers/updateForm";
import formatRequest from "../../../helpers/formatRequest";
import formComplete from "../../../helpers/formComplete";

// Services
import {
  modifyProjectById,
  deleteProjectTechno,
  addProjectTechno,
} from "../../../services/project.service";

// Style
import styles from "../../../styles/dashboard.module.css";

export default function DropdownProject({
  projectId,
  technos,
  toggleRow,
  setFlagProjects,
}) {
  const titleRef = useRef();
  const githubRef = useRef();
  const siteRef = useRef();
  const imageRef = useRef();

  const [isToolDropOpened, setIsToolDropOpened] = useState(false);
  const [isTechnoDropOpened, setIsTechnoDropOpened] = useState(false);

  // video info based on form inputs
  const [formProjectInfo, setFormProjectInfo] = useState({
    name: "",
    description: "",
    img: "",
    github: "",
    website: "",
    tool: "",
    // techno_images: {},
  });

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

  // handle change in form inputs
  const handleInputChange = (e) => {
    let updatedFormData = { ...formProjectInfo };
    switch (e.target.type) {
      case "radio":
        switch (e.target.getAttribute("data-attribute")) {
          case "tool":
            updatedFormData = updateFromDropdownRadio(e, formProjectInfo);
            break;
          default:
            updatedFormData = updateFromInput(e, formProjectInfo);
        }
        break;
      case "checkbox":
        switch (e.target.getAttribute("data-attribute")) {
          case "techno":
            updatedFormData = updateFromDropdownCheckbox(e, formProjectInfo);
            break;
          default:
            updatedFormData = updateFromInput(e, formProjectInfo);
        }
        break;
      case "file":
        updatedFormData = updateFromFileInput(e, imageRef, formProjectInfo);
        break;
      default:
        updatedFormData = updateFromInput(e, formProjectInfo);
    }
    setFormProjectInfo(updatedFormData);
  };

  // IN PROGRESS
  const handleSubmit = async (e) => {
    e.preventDefault();

    // make sure all required dropdown are filled (if any)
    const { areMandatoryInputsFilled: isFormCompleted, errorMessage } =
      formComplete(formProjectInfo);
    if (!isFormCompleted) {
      toast.error(`${errorMessage}`, TOAST_DEFAULT_CONFIG);
    }

    // use the FormData constructor to create a new FormData object (instance) to convert the image file into a bunch of data and send it through the network
    const thumbnailFormData = new FormData();
    thumbnailFormData.append("video_thumbnail", imageRef.current.files[0]);

    try {
      // upload video thumbnail to backend public folder
      // const {
      //   data: { url_file: videoThumbUrl },
      // } = await addProjectImage(thumbnailFormData);

      // update video entry to database
      await modifyProjectById(formatRequest(formProjectInfo), projectId);

      // delete previous project-techno entries from database
      await deleteProjectTechno(projectId);

      // add relation entry for each added category (video_category) to databaseb
      const relationReponses = [];
      formProjectInfo.techno.forEach(async (techno) => {
        try {
          const response = await addProjectTechno({
            project_id: projectId,
            techno_id: techno.id,
          });
          relationReponses.push(response);
        } catch (err) {
          console.error(err);
          toast.error(`${err.response.statusText}!`, TOAST_DEFAULT_CONFIG);
        }
      });

      // notify status
      toast.success(`Project successfully updated!`, TOAST_DEFAULT_CONFIG);

      // reset form inputs
      setTimeout(() => {
        window.location.reload();
      }, 3000);

      /**
       * !TO DO: do not refresh the page to reset form inputs
       * use instead dedicated methods
       * requires the dropdown states to be placed within ModalVideo...
       */
      // reset form inputs & state
      e.target.reset();
      setFormProjectInfo({});

      // close modal
      toggleRow(false);

      // raise flag to refetch data from DB and update table view
      setFlagProjects((prev) => !prev);
    } catch (err) {
      console.error(err);
      if (err.response?.status === 409) {
        toast.error(`${err.response.data}`, TOAST_DEFAULT_CONFIG);
      } else {
        toast.error(`${err.response.statusText}!`, TOAST_DEFAULT_CONFIG);
      }
    }
  };

  return (
    <tr className=" border-light/20 text-sm font-light">
      <td colSpan="8" className="gap-4 space-y-4 px-8 py-4">
        <form className="flex  gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="flex w-full flex-col gap-4">
              <div className="flex w-full gap-4">
                <Input
                  htmlFor="name"
                  type="text"
                  title="Name"
                  name="name"
                  className={`${styles.input__style} h-12`}
                  placeholder="Type project name..."
                  ref={titleRef}
                  handleChange={handleInputChange}
                />
                <div className="relative flex w-full flex-col gap-1.5">
                  <Label
                    htmlFor="tool"
                    className={`${styles.label__style}`}
                    title="Tool"
                  />
                  <Dropdown
                    type="radio"
                    name="tool"
                    title="Select tool"
                    items={technos}
                    isDropdownOpen={isToolDropOpened}
                    handleDropdown={setIsToolDropOpened}
                    handleChange={handleInputChange}
                  />
                </div>
                <div className="relative flex w-full flex-col gap-1.5">
                  <Label
                    htmlFor="techno"
                    className={`${styles.label__style}`}
                    title="Techno"
                  />
                  <Dropdown
                    type="checkbox"
                    name="techno"
                    title="Select techno"
                    items={technos}
                    isDropdownOpen={isTechnoDropOpened}
                    handleDropdown={setIsTechnoDropOpened}
                    handleChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="w-full">
                <Input
                  htmlFor="github"
                  type="text"
                  title="Github"
                  name="github"
                  className={`${styles.input__style} h-12`}
                  placeholder="Type repo address..."
                  ref={githubRef}
                  handleChange={handleInputChange}
                />
              </span>
              <span className="w-full">
                <Input
                  htmlFor="website"
                  type="text"
                  title="Website"
                  name="website"
                  className={`${styles.input__style} h-12`}
                  placeholder="Type website address..."
                  ref={siteRef}
                  handleChange={handleInputChange}
                />
              </span>
            </div>

            <Input
              type="file"
              name="thumbnail"
              title="Image"
              accept=".jpg, .jpeg, .png, .webp"
              className="file:hover:primary/20 file:cursor-pointer file:rounded-md file:border-none file:bg-primary file:p-3 file:text-light"
              ref={imageRef}
              handleChange={handleInputChange}
            />
          </div>

          <div className="flex w-full items-end gap-4">
            <div className="flex h-full w-full flex-col gap-1.5">
              <Label
                htmlFor="description"
                className={`${styles.label__style}`}
                title="Project description"
              />
              <textarea
                type="text"
                name="description"
                id="description"
                className={`${styles.input__style} h-full w-full`}
                placeholder="Type project description..."
                onChange={handleInputChange}
              />
            </div>
            <span>
              <button
                type="submit"
                className={`${styles.btn__style} h-12 bg-primary text-light`}
              >
                Save
              </button>
            </span>
          </div>
        </form>
      </td>
    </tr>
  );
}

DropdownProject.propTypes = {
  projectId: PropTypes.number,
  technos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      img: PropTypes.string,
    })
  ).isRequired,
  toggleRow: PropTypes.func.isRequired,
  setFlagProjects: PropTypes.func,
};

DropdownProject.defaultProps = {
  projectId: null,
  setFlagProjects: null,
};
