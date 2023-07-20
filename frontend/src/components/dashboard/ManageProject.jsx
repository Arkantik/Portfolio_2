// Packages
import PropTypes from "prop-types";
import { useState } from "react";

// Components
import RowSearch from "./RowSearch";
import NavTab from "./NavTab";
import TableProjects from "./project/TableProjects";
import TableTechnos from "./technos/TableTechnos";

export default function ManageContent({ filterText, setFilterText }) {
  const [activeTab, setActiveTab] = useState("project");
  const [flagTechnos, setFlagTechnos] = useState(false);
  const [flagProjects, setFlagProjects] = useState(false);

  const setActiveTabItem = (tab) => setActiveTab(tab);

  return (
    <article className="flex min-h-screen flex-col gap-8 px-20 py-24 font-alt text-light lg:px-60">
      <h1 className="text-xl">Manage Portfolio</h1>

      <div className="relative min-w-[600px] overflow-hidden bg-gray-800 shadow-md sm:rounded-lg">
        <NavTab setActiveTabItem={setActiveTabItem} />

        <RowSearch
          activeTab={activeTab}
          filterText={filterText}
          setFilterText={setFilterText}
          setFlagProjects={setFlagProjects}
          setFlagTechnos={setFlagTechnos}
        />

        {activeTab === "project" && (
          <TableProjects
            filterText={filterText}
            flagProjects={flagProjects}
            setFlagProjects={setFlagProjects}
          />
        )}

        {activeTab === "techno" && (
          <TableTechnos
            filterText={filterText}
            flagTechnos={flagTechnos}
            setFlagTechnos={setFlagTechnos}
          />
        )}
      </div>
    </article>
  );
}

ManageContent.propTypes = {
  filterText: PropTypes.string.isRequired,
  setFilterText: PropTypes.func.isRequired,
};
