// Packages
import PropTypes from "prop-types";

export default function RowHead({ activeTab }) {
  const titles = [
    {
      id: 1,
      name: "ID",
    },
    {
      id: 2,
      name: "Name",
    },
    {
      id: 3,
      name: "Image",
    },
    {
      id: 4,
      name: "Github",
    },
    {
      id: 5,
      name: "Site",
    },
    {
      id: 6,
      name: "Tool",
    },
    {
      id: 7,
      name: "Technos",
    },
    {
      id: 8,
      name: "Actions",
    },
  ];

  const filteredTitles = titles.filter((title) => {
    if (
      activeTab === "techno" &&
      (title.name === "Github" ||
        title.name === "Site" ||
        title.name === "Tool" ||
        title.name === "Technos")
    ) {
      return false; // Exclude titles for "Technos" tab
    }
    return true; // Include other titles
  });

  return (
    <thead className="bg-primary text-light">
      <tr>
        {filteredTitles.map((title) => (
          <th key={title.id} scope="col" className="px-4 py-3 text-sm">
            {title.name}
          </th>
        ))}
      </tr>
    </thead>
  );
}

RowHead.propTypes = {
  activeTab: PropTypes.string.isRequired,
};
