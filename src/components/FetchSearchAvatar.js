import React, { useState } from 'react';

const FetchSearchAvatar = () => {
  const [avatar, setAvatar] = useState([]);

  const [query, setQuery] = useState("");

  const fetchAvatar = () => {
    fetch(`https://sampleapis.com/avatar/api/characters`)
    .then((response) => response.json())
    .then((data) => setAvatar(data))
    .catch(error) => console.log("Error: ", error))
  };

}
