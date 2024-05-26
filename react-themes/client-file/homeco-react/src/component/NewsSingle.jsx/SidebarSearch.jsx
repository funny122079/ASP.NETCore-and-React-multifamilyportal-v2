import { useState } from "react";

function SidebarSearch() {
  const [search, setSearch] = useState("");
  return (
    <div className="homec-sidebar__single blog-search mg-top-30">
      <div className="form">
        <input
          type="text"
          placeholder="Search Here..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <a className="button" href="#">
          <i className="fa fa-search"></i>
        </a>
      </div>
    </div>
  );
}

export default SidebarSearch;
