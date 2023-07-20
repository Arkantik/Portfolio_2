// Packages
import PropTypes from "prop-types";
import { Modal } from "antd";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

// Components
import Input from "../../utilities/Input";
import Label from "../../utilities/Label";
import Dropdown from "../../utilities/Dropdown";

// Hooks
import useAxios from "../../../hooks/useAxios";

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
  addProject,
  addProjectTechno,
} from "../../../services/project.service";

// Styles
import styles from "../../../styles/dashboard.module.css";

export default function ModalProject({ open, setIsModalOpened, setFlag }) {
  const inputRef = useRef();
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

  // fetch data from database to populate dropdown items
  const { data: technos } = useAxios("/techno");
  const { data: games } = useAxios("/games");

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

  const handleCloseModal = () => {
    // close dropdowns
    setIsToolDropOpened(false);
    setIsTechnoDropOpened(false);
    // close modal
    setIsModalOpened(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // make sure all required dropdown are filled (if any)
    const { areMandatoryInputsFilled: isFormCompleted, errorMessage } =
      formComplete(formProjectInfo);
    if (!isFormCompleted) {
      toast.error(`${errorMessage}`, TOAST_DEFAULT_CONFIG);
      return;
    }

    // use the FormData constructor to create a new FormData object (instance) to convert the image file into a bunch of data and send it through the network
    const thumbnailFormData = new FormData();
    thumbnailFormData.append("project_image", imageRef.current.files[0]);

    try {
      const responseProject = await addProject(formatRequest(formProjectInfo));

      // add relation entry for each added category (video_category) to database
      const relationReponses = [];

      formProjectInfo.techno.forEach(async (techno) => {
        try {
          const response = await addProjectTechno({
            project_id: responseProject.data.insertId,
            techno_id: techno.id,
          });
          relationReponses.push(response);
        } catch (err) {
          console.error(err);
          toast.error(`${err.response.statusText}!`, TOAST_DEFAULT_CONFIG);
        }
      });

      // notify status
      toast.success(`Project successfully added!`, TOAST_DEFAULT_CONFIG);

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
      // e.target.reset();
      // setFormProjectInfo({});

      // close modal
      setIsModalOpened(false);

      // raise flag to refetch data from DB and update table view
      setFlag((prev) => !prev);
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
    <Modal
      centered
      open={open}
      title="Add a new project"
      onCancel={handleCloseModal}
      onOk={handleSubmit}
      footer={null}
      afterOpenChange={() => {
        inputRef.current.focus();
      }}
    >
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-4">
          <Input
            htmlFor="name"
            type="text"
            title="Name"
            name="name"
            className={`${styles.input__style}`}
            placeholder="Type project name..."
            required
            autoComplete="true"
            ref={inputRef}
            handleChange={handleInputChange}
          />
          <Input
            htmlFor="github"
            type="text"
            title="Github"
            name="title"
            className={`${styles.input__style}`}
            placeholder="Type repo address..."
            required={false}
            autoComplete="true"
            handleChange={handleInputChange}
          />
          <Input
            htmlFor="website"
            type="text"
            title="Website"
            name="website"
            className={`${styles.input__style}`}
            placeholder="Type website address..."
            required={false}
            autoComplete="true"
            handleChange={handleInputChange}
          />

          <div className="flex flex-wrap justify-between gap-y-4 md:flex-nowrap">
            <div className="relative flex flex-col gap-1.5">
              <Label
                htmlFor="Tool"
                className={`${styles.label__style}`}
                title="Tool"
              />
              <Dropdown
                type="radio"
                name="tool"
                title="Select tool"
                items={games}
                isDropdownOpen={isToolDropOpened}
                handleDropdown={setIsToolDropOpened}
                handleChange={handleInputChange}
              />
            </div>
            <div className="relative flex flex-col gap-1.5">
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

          <div className="flex w-full flex-col gap-1.5">
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
              required
              onChange={handleInputChange}
            />
          </div>

          <Input
            type="file"
            name="image"
            title="Image Upload"
            accept=".jpg, .jpeg, .png, .webp"
            className="file:hover:primary file:cursor-pointer file:rounded-md file:border-none file:bg-primary file:p-3 file:text-light"
            required
            ref={imageRef}
            handleChange={handleInputChange}
          />
        </div>

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={handleCloseModal}
            className={`${styles.btn_modal__style}`}
          >
            Cancel
          </button>

          <button
            type="submit"
            className={`${styles.btn_modal__style} ml-2 text-light`}
          >
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
}

ModalProject.propTypes = {
  open: PropTypes.bool,
  setIsModalOpened: PropTypes.func,
  setFlag: PropTypes.func,
};

ModalProject.defaultProps = {
  open: null,
  setIsModalOpened: null,
  setFlag: null,
};
