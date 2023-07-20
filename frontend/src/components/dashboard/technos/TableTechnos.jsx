// Packages
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Pagination, ConfigProvider } from "antd";

// Components
import RowHead from "../RowHead";
import RowTechno from "./RowTechno";

// Helpers
import filterTable from "../../../helpers/filterTable";

// Services
import * as Services from "../../../services/techno.service";

export default function TableGames({
  filterText,
  flagTechnos,
  setFlagTechnos,
}) {
  const [technos, setTechnos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  // table pagination
  const offset = pageSize * currentPage - pageSize;
  const nextPage = offset + pageSize;

  useEffect(() => {
    Services.getAllTechnos().then((res) => {
      setTechnos(res);
    });
  }, [flagTechnos]);

  return (
    <>
      {technos.length && (
        <table className="text-neutralLightest w-full overflow-x-auto text-left text-base">
          <RowHead activeTab="techno" />
          <tbody>
            {filterTable(technos, "name", filterText)
              .slice(offset, nextPage)
              .map((techno) => (
                <RowTechno
                  key={techno.id}
                  techno={techno}
                  setFlagTechnos={setFlagTechnos}
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
          total={technos.length}
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

TableGames.propTypes = {
  filterText: PropTypes.string.isRequired,
  flagTechnos: PropTypes.bool.isRequired,
  setFlagTechnos: PropTypes.func.isRequired,
};
