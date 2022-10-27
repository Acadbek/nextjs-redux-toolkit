import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
const About = () => {
  const user = useSelector((state) => state.posts);
  const [inputVl, setInputVl] = useState("");

  return (
    <div className="w-full bg-white rounded-lg px-6 py-4 mt-4 mx-[20px]">
      <div className="flex justify-between w-full mb-[12px]">
        <input
          className="bg-[#F5F6FA] max-w-[432px] w-full rounded-lg text-[#667281] text-[13px] px-[12px] outline-none"
          type="text"
          placeholder="search"
          onChange={(e) => setInputVl(e.target.value)}
        />
        <button className="bg-[#177EFF] px-[45px] py-[10px] rounded-lg text-white text-[14px]">
          <Link href={"/create"}>Create Post</Link>
        </button>
      </div>
      {/* {user?.loading && <h2>Loading...</h2>}
      {!user?.loading && user?.error ? <h2>Error: {user?.error}</h2> : null} */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {user?.posts?.map(
            ({ id, title, time, status }) =>
              title.toLowerCase().includes(inputVl) && (
                <tr key={id}>
                  <td className="h-[80px]">{id}</td>
                  <td>{title}</td>
                  <td>{time}</td>
                  <td>{status}</td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default About;
