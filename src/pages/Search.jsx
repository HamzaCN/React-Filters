import React, { useState } from "react";
import "./Search.css";
import { Users } from "../Users";
import Table from "./Table";
const Search = () => {
  const [query, setQuery] = useState("");
  const keys = ["first_name","last_name","email"];
  const searching = (data) => {
    return data.filter(
      (item) =>
       keys.some(key=>item[key].toLowerCase().includes(query)) 
    );
  };
  return (
    <div className="SearchBox">
      <h2 className="searchheading">Search Filter in React</h2>
      <input
        type="text"
        placeholder="Search...."
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* <ul className="list">
        {Users.filter(user=>user.first_name.toLocaleLowerCase().includes(query)).map((user) => (
            <li key={user.id} className="listItem">
                {user.first_name}
            </li>
        ))}
        </ul> */}
      <Table data={searching(Users)} />
    </div>
  );
};

export default Search;
