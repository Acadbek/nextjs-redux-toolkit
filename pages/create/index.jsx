import Link from "next/link";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../redux/posts";

const CreatePost = () => {
  const valueRef = useRef("");
  const statusRef = useRef("");
  const timeRef = useRef("");
  const dispatch = useDispatch();

  const onClick = () => {
    if (valueRef.current.value.trim().length === 0) {
      alert("Enter a task before adding !");
      valueRef.current.value = "";
      statusRef.current.value = "";
      timeRef.current.value = "";
      return;
    }
    dispatch(
      add({
        title: valueRef.current.value,
        status: statusRef.current.value,
        time: timeRef.current.value,
      })
    );
    valueRef.current.value = "";
    statusRef.current.value = "";
    timeRef.current.value = "";
  };

  return (
    <div>
      <button>
        <Link href={"/posts"}>posts</Link>
      </button>
      <h1>Create Post</h1>
      <div
        style={{ display: "flex", flexDirection: "column", maxWidth: "200px" }}
      >
        <input
          name="value"
          type="text"
          value={valueRef.current.value}
          ref={valueRef}
          placeholder="Title"
        />
        <input
          name="status"
          type="text"
          value={statusRef.current.value}
          ref={statusRef}
          placeholder="Status"
        />
        <input
          name="time"
          type="text"
          value={timeRef.current.value}
          ref={timeRef}
          placeholder="Time"
        />
      </div>
      <button onClick={onClick}>Submit</button>
    </div>
  );
};

export default CreatePost;
