import Link from "next/link";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../redux/posts";

const CreatePost = () => {
  const valueRef = useRef("");
  const dispatch = useDispatch();

  const onClick = () => {
    // console.log(valueRef.current.value);
    // dispatch(add());
    if (valueRef.current.value.trim().length === 0) {
      alert("Enter a task before adding !");
      valueRef.current.value = "";
      return;
    }

    dispatch(
      add({
        title: valueRef.current.value,
      })
    );
    valueRef.current.value = "";
  };

  return (
    <div>
      <button>
        <Link href={"/posts"}>posts</Link>
      </button>
      <h1>Create Post</h1>
      <input type="text" value={valueRef.current.value} ref={valueRef} />
      <button onClick={onClick}>Submit</button>
    </div>
  );
};

export default CreatePost;
