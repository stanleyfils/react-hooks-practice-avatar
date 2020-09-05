import React, { useState } from "react";

const FetchSearchAvatar = () => {
  const [avatar, setAvatar] = useState([]);

  const [query, setQuery] = useState("");

  const fetchAvatar = () => {
    fetch(`https://sampleapis.com/avatar/api/characters`)
      .then((response) => response.json())
      .then((data) => setAvatar(data))
      .catch((error) => console.log("Error: ", error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchAvatar();
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
    fetchAvatar();
  };

  return (
    <>
      <h1>Avatar Characters</h1>

      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <pre>{JSON.stringify(avatar, null, 2)}</pre>
    </>
  );
};

export default FetchSearchAvatar;