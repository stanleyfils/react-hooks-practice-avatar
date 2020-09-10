import React, { useState } from "react";

const FetchSearchAvatar = () => {
  const [avatar, setAvatar] = useState([]);

  const [query, setQuery] = useState("");

  const baseURL = "https://sampleapis.com/avatar/api/characters";
  const fetchAvatar = () => {
    fetch(`${baseURL}?name=${query}`)
      .then((response) => response.json())
      .then((data) => setAvatar(data))
      .catch((error) => console.log("Error: ", error));
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
    fetchAvatar();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchAvatar();
  };

  const results = avatar.map((value) => {
    return (
      <>
        <h4>{value.Name}</h4>
      </>
    );
  });

  return (
    <>
      <h1>Avatar Characters</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} placeholder="Search Character" />
        <button type="submit">Search</button>
      </form>

      {results}
    </>
  );
};

export default FetchSearchAvatar;