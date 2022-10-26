import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import icon from "../../public/icons/search.svg";
export default function About() {
  const user = useSelector((state) => state.posts);

  const click = () => {
    let posts = JSON.parse(window.localStorage.getItem("posts"));
    console.log(posts[0], "posts");
  };

  return (
    <div className="max-w-5xl m-auto">
      <h1>Post List</h1>
      <div className="flex justify-between w-full my-5">
        <input
          className="bg-[#F5F6FA] max-w-[432px] w-full rounded-lg text-[#667281] text-[13px] px-[12px] outline-none"
          type="text"
          placeholder="search"
        />
        {/* <Image width={15} height={15} src={icon} alt="search" /> */}
        <button className="bg-[#177EFF] px-[45px] py-[10px] rounded-lg text-white text-[14px]">
          <Link href={"/create"}>Create Post</Link>
        </button>
      </div>
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
