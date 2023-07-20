// Packages
import { Modal } from "antd";
import PropTypes from "prop-types";
import { useRef } from "react";
import { toast } from "react-toastify";

// Components
import Input from "../../utilities/Input";

// Services
import { addTechno } from "../../../services/techno.service";

// Styles
import styles from "../../../styles/dashboard.module.css";

export default function ModalTechno({ open, setIsModalOpened, setFlag }) {
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

  const handleClose = () => {
    inputRef.current.value = "";
    setIsModalOpened(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // upload file to backend public folder
    // use the FormData constructor to create a new FormData object (instance) to convert the image file into a bunch of data and send it through the network
    const formData = new FormData();
    formData.append("techno_image", fileRef.current.files[0]);
    formData.append("techno_name", inputRef.current.value.trim().toLowerCase());
    try {
      const response = await addTechno(formData);
      if (response?.status === 204)
        toast.success("Techno successfully added!", TOAST_DEFAULT_CONFIG);
      // reset inputs
      inputRef.current.value = "";
      fileRef.current.value = "";
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
      title="Add a new techno"
      onCancel={handleClose}
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
        <Input
          htmlFor="techno_name"
          title="Techno Name"
          type="text"
          className={`${styles.input__style}`}
          placeholder="Type techno name..."
          required
          ref={inputRef}
        />
        <Input
          htmlFor="techno_image"
          title="Image Upload"
          tooltip="Valid file extensions are: .jpg, .jpeg, .png, .webp, .svg"
          type="file"
          accept=".jpg, .jpeg, .png, .webp, .svg"
          className="file:cursor-pointer file:rounded-md file:border-none file:bg-primary file:p-3 file:text-light"
          required
          ref={fileRef}
        />
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={handleClose}
            className={`${styles.btn_modal__style} text-light`}
          >
            Cancel
          </button>

          <button
            type="submit"
            className={`${styles.btn_modal__style} ml-2 bg-primary text-light`}
          >
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
}

ModalTechno.propTypes = {
  open: PropTypes.bool,
  setIsModalOpened: PropTypes.func,
  setFlag: PropTypes.func,
};

ModalTechno.defaultProps = {
  open: null,
  setIsModalOpened: null,
  setFlag: null,
};
