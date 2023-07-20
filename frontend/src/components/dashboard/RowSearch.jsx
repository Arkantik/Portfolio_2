// Packages
import PropTypes from "prop-types";
import { useState } from "react";

// Components
import Searchbar from "../utilities/Searchbar";
import ModalProject from "./project/ModalProject";
import ModalTechno from "./tech/ModalTechno";

export default function RowSearch({
  activeTab,
  filterText,
  setFilterText,
  setFlagTechnos,
  setFlagProjects,
}) {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const addButton = () => {
    if (activeTab === "project") {
      return "Add Project";
    }
    if (activeTab === "techno") {
      return "Add Techno";
    }
    return null;
  };

  const addModal = () => {
    if (activeTab === "project") {
      return (
        <ModalProject
          open={isModalOpened}
          setIsModalOpened={setIsModalOpened}
          setFlag={setFlagProjects}
        />
      );
    }
    if (activeTab === "techno") {
      return (
        <ModalTechno
          open={isModalOpened}
          setIsModalOpened={setIsModalOpened}
          setFlag={setFlagTechnos}
        />
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-x-4 md:space-y-0">
      <div className="w-full md:w-1/2">
        <div className="flex items-center gap-4">
          <Searchbar
            className="relative w-full min-w-[200px]"
            filterText={filterText}
            onFilterTextChange={setFilterText}
          />
        </div>
      </div>

      {activeTab !== "dashboard" && activeTab !== "fav" && (
        <div className="flex w-full justify-center space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0">
          <button
            type="button"
            className="flex items-center justify-between gap-2 rounded-lg bg-primary px-4 py-3 text-center text-sm text-white hover:bg-primary/70 focus:outline-none"
            onClick={() => setIsModalOpened(true)}
          >
            <svg
              className="flex h-4 w-4 justify-end"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              />
            </svg>
            {addButton()}
          </button>
          {addModal()}
        </div>
      )}
    </div>
  );
}

RowSearch.propTypes = {
  activeTab: PropTypes.string.isRequired,
  filterText: PropTypes.string,
  setFilterText: PropTypes.func,
  setFlagTechnos: PropTypes.func,
  setFlagProjects: PropTypes.func,
};

RowSearch.defaultProps = {
  filterText: null,
  setFilterText: null,
  setFlagTechnos: null,
  setFlagProjects: null,
};
