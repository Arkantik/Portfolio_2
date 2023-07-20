// Packages
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Pagination, ConfigProvider } from "antd";

// Components
import RowHead from "../RowHead";
import RowProject from "./RowProject";

// Helpers
import filterTable from "../../../helpers/filterTable";

// Services
import * as Services from "../../../services/project.service";

export default function TableProjects({
  filterText,
  flagProjects,
  setFlagProjects,
}) {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  // table pagination
  const offset = pageSize * currentPage - pageSize;
  const nextPage = offset + pageSize;

  useEffect(() => {
    Services.getAllProjects().then((res) => {
      setProjects(res);
    });
  }, [flagProjects]);

  return (
    <>
      {projects.length && (
        <table className="text-neutralLightest w-full overflow-x-auto text-left text-base">
          <RowHead activeTab="project" />
          <tbody>
            {filterTable(projects, "name", filterText)
              .slice(offset, nextPage)
              .map((project) => (
                <RowProject
                  key={project.projectid}
                  project={project}
                  setFlagProjects={setFlagProjects}
                />
              ))}
          </tbody>
        </table>
      )}

      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#26acd9",
            colorText: "#26acd9",
            colorBgContainer: "#1f2937",
            colorBgTextHover: "#374151",
            colorTextPlaceholder: "#26acd9",
            colorBorder: "#26acd9",
            controlOutlineWidth: "0",
          },
        }}
      >
        <Pagination
          pageSizeOptions={[5, 10, 20, 50, 100]}
          className="py-2 text-center"
          pageSize={pageSize}
          current={currentPage}
          total={projects.length}
          onChange={(pageClicked, onPageSize) => {
            setCurrentPage(pageClicked);
            setPageSize(onPageSize);
          }}
          showSizeChanger
        />
      </ConfigProvider>
    </>
  );
}

TableProjects.propTypes = {
  filterText: PropTypes.string.isRequired,
  flagProjects: PropTypes.bool,
  setFlagProjects: PropTypes.func,
};

TableProjects.defaultProps = {
  flagProjects: null,
  setFlagProjects: null,
};
