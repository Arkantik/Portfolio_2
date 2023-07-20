// Packages
import PropTypes from "prop-types";

// Helpers
import { capitalizeText } from "../../helpers/getName";
import filterTable from "../../helpers/filterTable";

export default function DropdownList({
  items,
  inputName,
  inputType = "radio",
  filterOptions,
  selection,
  onSelectionChange,
  handleChange,
}) {
  const handleOnValueChange = (e, id) => {
    onSelectionChange(id);
    handleChange(e);
  };

  return (
    <ul
      className="h-40 overflow-y-auto px-3 pb-3 text-xs text-light"
      aria-labelledby="dropdownSearchButton"
    >
      {Array.isArray(items) && items.length > 0 ? (
        filterTable(items, "name", filterOptions).map((item) => (
          <li key={item.id} className="rounded pl-2 hover:bg-gray-600">
            <label
              htmlFor={item.name}
              className="ml-2 flex w-full items-center gap-2 rounded py-2 text-xs"
            >
              <input
                id={item.name}
                type={inputType}
                name={inputType === "radio" ? inputName : item.name}
                data-attribute={inputName}
                data-key={item.id}
                value={item.name}
                checked={selection.find((el) => el.id === item.id).isSelected}
                onChange={(event) => handleOnValueChange(event, item.id)}
                className="h-4 w-4 rounded border-light bg-gray-100 focus:outline-none"
              />
              {capitalizeText(item.name)}
            </label>
          </li>
        ))
      ) : (
        <li>No items found</li>
      )}
    </ul>
  );
}

DropdownList.propTypes = {
  inputName: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ).isRequired,
  filterOptions: PropTypes.string.isRequired,
  selection: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      isSelected: PropTypes.bool,
    })
  ).isRequired,
  onSelectionChange: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
