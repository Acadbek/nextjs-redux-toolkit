import Link from "next/link";
import { useSelector } from "react-redux";

export default function About() {
  const user = useSelector((state) => state.posts);

  const click = () => {
    let posts = JSON.parse(window.localStorage.getItem("posts"));
    console.log(posts[0], "posts");
  };

  return (
    <div>
      <h1>Post List</h1>
      <button>
        <Link href={"/create"}>Create</Link>
      </button>
      {/* {user?.loading && <h2>Loading...</h2>}
      {!user?.loading && user?.error ? <h2>Error: {user?.error}</h2> : null} */}
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {user?.posts?.map(({ id, title, time, status }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{title}</td>
              <td>{time}</td>
              <td>{status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={click}>click</button>
    </div>
  );
}
