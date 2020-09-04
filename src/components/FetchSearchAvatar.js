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

  const handleChange = (event) => {
    setQuery(event.target.value);
    fetchAvatar();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchAvatar();
  };

  return (
    <>
      <div>
        <h1>Avatar: The Last Airbender</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
};

export default FetchSearchAvatar;