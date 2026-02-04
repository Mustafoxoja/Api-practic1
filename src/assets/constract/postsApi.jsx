import React, { useEffect, useState } from "react";

const PostsComp = () => {
  const [postusers, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setLoading(true);
      const jav = (await = fetch("https://jsonplaceholder.typicode.com/posts"));
    } catch (error) {}
  });

  return <div></div>;
};

export default PostsComp;
