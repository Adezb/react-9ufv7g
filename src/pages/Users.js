import React, { useState } from "react";
import useFetch from "../useFetch";

const Users = () => {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useFetch(
    `https://randomuser.me/api/?page=${page}&results=10&seed=abc`
  );

  const pages = 15;

  if (loading) {
    return <div className="data-loading">Data Loading...</div>;
  }

  if (!loading && error) {
    return <>Error</>;
  }
  return (
    <div className="page-content">
      <h3> List of Users on our service. </h3>
      {data?.results.map((each, index) => {
        const name = `${each.name.title} ${each.name.first} ${each.name.last}`;
        return (
          <li key={name.toLocaleLowerCase().replaceAll(" ", "")}>
            {`${index + 1}.${name}`}
          </li>
        );
      })}

      {
        <button
          disabled={page <= 1}
          onClick={() => setPage((prev) => prev - 1)}
          className="nav-btn"
        >
          {" "}
          Prev
        </button>
      }
      <p className="pagination-tag">
        Pages: {page} of {pages}
      </p>
      {
        <button
          disabled={page >= pages}
          aria-disabled={page >= pages}
          onClick={() => setPage((prev) => prev + 1)}
          className="nav-btn"
        >
          Next
        </button>
      }
      {/*SETTING PAGE NUMBER BUTTON */}
      {Array.from({ length: pages }, (value, index) => index + 1).map(
        (each) => (
          <button onClick={() => setPage(each)} className="page-numb-btn">
            {each}
          </button>
        )
      )}
    </div>
  );
};

export default Users;
