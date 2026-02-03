import { useEffect, useState } from "react";
import { Card } from "./apiConnect";
import { Input } from "@mui/joy";
import LoadingImg from "../../assets/Loading_2.gif";
const AdvancedApi = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) {
          throw new Error("Faliled fetch user api");
        }
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        setError(error.message || "something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);
  console.log(users);

  const filterUser = users.filter((user) => {
    const keyword = search.toLowerCase();
    return (
      user.name.toLowerCase().includes(keyword) ||
      user.email.toLowerCase().includes(keyword)
    );
  });

  return (
    <div style={{ padding: "5px 20px" }}>
      <h1>User List</h1>
      <Input
        type="text"
        placeholder="sesarch user"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading && <img src={LoadingImg} alt="Loading..." />}
      {filterUser.length === 0 && <h2>No user found</h2>}
      {filterUser.map((useer, num) => {
        return (
          <Card key={num}>
            <p>{useer.name}</p>
            <p>{useer.username}</p>
            <p>{useer.phone}</p>
            <p>{useer.email}</p>
            <p>{useer.website}</p>
          </Card>
        );
      })}
    </div>
  );
};

export default AdvancedApi;
