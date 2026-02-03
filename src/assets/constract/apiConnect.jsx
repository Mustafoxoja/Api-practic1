import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import styled from "styled-components";

const ApiConnect = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(setUser);
  }, []);

  console.log(user);

  return (
    <div>
      {user.map((useer, num) => {
        return (
          <Card key={num}>
            <Link to={`/api/${useer.id}`}>
              <p>{useer.name}</p>
              <p>{useer.username}</p>
              <p>{useer.phone}</p>
              <p>{useer.email}</p>
              <p>{useer.website}</p>
            </Link>
          </Card>
        );
      })}
    </div>
  );
};
export const Card = styled.div`
  border: 1px solid lightgray;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
`;
export default ApiConnect;
