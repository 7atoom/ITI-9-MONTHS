import React from 'react'

function PaginatedPages(props) {
  const { pageCount, selectedPage, handleSelectPage } = props;
  return (
    <div className="join flex justify-center mt-6">
      {
        Array.from({ length: pageCount }, (_, id) => (
          <button
            key={id}
            onClick={() => handleSelectPage(id)}
            className={`join-item btn ${selectedPage === id ? "btn-active" : ""}`}
          >
            {id + 1}
          </button>
        ))
      }
    </div>
  );
}

export default PaginatedPages;