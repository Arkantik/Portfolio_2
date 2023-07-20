// Packages
import { useState } from "react";

// Components
import ManageProject from "../components/dashboard/ManageProject";

export default function Dashboard() {
  const [filterText, setFilterText] = useState("");
  return (
    <ManageProject filterText={filterText} setFilterText={setFilterText} />
  );
}
