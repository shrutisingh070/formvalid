import { useState } from "react";
import "./App.css";

function App() {
  // sample list of items
  const items = ["Scale", "Copy", "Eraser", "Notebook", "Pencil", "Pen"];

  // state for search input
  const [search, setSearch] = useState("");

  // filter items based on search text (long form)
  const filteredItems = items.filter(function (item) {
    const itemLC = item.toLowerCase();     // lowercase item
    const searchLC = search.toLowerCase(); // lowercase search text
    return itemLC.includes(searchLC);      // keep only matching items
  });

  return (
    <div className="container">
      <h2>Search Filter List</h2>

      {/* Search box */}
      <input
        type="text"
        placeholder="Search here..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      {/* List */}
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
}

export default App;
