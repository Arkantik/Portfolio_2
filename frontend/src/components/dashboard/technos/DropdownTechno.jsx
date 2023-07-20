// Packages
import PropTypes from "prop-types";
import { useRef } from "react";
import { toast } from "react-toastify";

// Components
import Input from "../../utilities/Input";

// Services
import { modifyTechnoById } from "../../../services/techno.service";

// Style
import styles from "../../../styles/dashboard.module.css";

export default function DropdownTechno({ id, toggleDropdown, setFlagTechnos }) {
  const inputRef = useRef();
  const fileRef = useRef();

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("techno_image", fileRef.current.files[0]);
    formData.append("techno_name", inputRef.current.value.trim().toLowerCase());

    toggleDropdown();
    modifyTechnoById(formData, id)
      .then((res) => {
        if (res?.status === 204)
          toast.success("Techno successfully updated!", TOAST_DEFAULT_CONFIG);
        setFlagTechnos((prev) => !prev);
      })
      .catch((err) => {
        console.error(err);
        toast.error(`${err.response.statusText}!`, TOAST_DEFAULT_CONFIG);
      });
  };

  return (
    <tr className="border-b text-sm text-light">
      <td colSpan="4" className="px-8 py-4">
        <form
          className="flex flex-wrap justify-between gap-4"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-4">
            <Input
              htmlFor="name"
              title="Techno Name"
              type="text"
              className={`${styles.input__style} h-full`}
              placeholder="Type techno name"
              ref={inputRef}
              required
            />
            <Input
              title="Techno Icon"
              type="file"
              accept=".jpg, .jpeg, .png, .webp, .svg"
              className="file:cursor-pointer file:rounded-md file:border-none file:bg-primary file:p-3 file:text-light"
              ref={fileRef}
              required
            />
          </div>
          <span className="flex items-end">
            <button
              type="submit"
              className={`${styles.btn__style} h-12 bg-primary text-light `}
            >
              Save
            </button>
          </span>
        </form>
      </td>
    </tr>
  );
}

DropdownTechno.propTypes = {
  id: PropTypes.number.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  setFlagTechnos: PropTypes.func.isRequired,
};
