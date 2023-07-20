export function capitalizeWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function capitalizeText(text) {
  if (!text) return null;
  return text.trim().split(" ").map(capitalizeWord).join(" ");
}

export function findSelectionIndex(arr) {
  const indexes = [];
  arr.forEach((el, index) => {
    if (el.isSelected) indexes.push(index);
  });
  return indexes;
}

export function getSelectionName(arr) {
  const selectionIndexes = findSelectionIndex(arr);
  const isMultipleSelection = selectionIndexes.length > 1;
  if (!selectionIndexes.length) return "";
  const selectionName =
    arr[selectionIndexes[0]].name + (isMultipleSelection ? "..." : "");
  return capitalizeText(selectionName);
}
