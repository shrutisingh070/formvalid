import React, { useState } from "react";
import "./App.css";
function Pagination() {
  const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  // items for current page
  const start = (page - 1) * itemsPerPage;
  const currentItems = items.slice(start, start + itemsPerPage);

  return (
    <div>
      <h1>Pagination</h1>
      <ul>
        {currentItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {/* Prev button */}
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Prev
      </button>

      {/* Page numbers */}
      {Array.from({ length: Math.ceil(items.length / itemsPerPage) }, (_, i) => (
        <button key={i} onClick={() => setPage(i + 1)}>
          {i + 1}
        </button>
      ))}

      {/* Next button */}
      <button
        onClick={() => setPage(page + 1)}
        disabled={page === Math.ceil(items.length / itemsPerPage)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
