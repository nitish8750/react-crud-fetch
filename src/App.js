import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [inputVal, setInputVal] = useState("");
  const [users, setUsers] = useState(null);
  const [postUser, setPostUser] = useState(null);
  const [putUser, setPutUser] = useState(null);
  const [deleteUser, setDeleteUser] = useState(null);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((result) => {
    //     setUsers(result);
    //   });
    // getPost();
  }, []);

  const getPost = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${inputVal}`
    );
    const result = await response.json();
    console.log(result);
    setUsers(result);
  };

  const createPost = async () => {
    // axios
    //   .post("https://jsonplaceholder.typicode.com/posts", {
    //     title: "foo",
    //     body: "bar",
    //     userId: 1
    //   })
    //   .then((response) => setPostUser(response.data));

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1
      })
    });
    const result = await response.json();
    console.log(result);
    setUsers(result);
  };

  const updatePost = () => {
    axios
      .put("https://jsonplaceholder.typicode.com/posts/1", {
        title: "nigam",
        body: "nitish",
        userId: 1
      })
      .then((response) => setPutUser(response.data));
  };

  const deletePost = () => {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/1", {
        title: "nigam",
        body: "nitish",
        userId: 1
      })
      .then((response) => setDeleteUser(response.data));
  };

  // if (!users) return "NO users";
  // console.log(postUser);

  return (
    <div className="App">
      <input type="text" onChange={(e) => setInputVal(e.target.value)} />
      <button onClick={getPost}>GET</button>
      <button onClick={createPost}>POST</button>
      <button onClick={updatePost}>PUT</button>
      <button onClick={deletePost}>DELETE</button>
      <ul>
        {users &&
          Array.isArray(users) &&
          users.map((obj) => <li key={obj.id}>{obj.name}</li>)}
      </ul>
      <ul>
        {postUser
          ? Object.keys(postUser).map((key) => (
              <li key={key}>{postUser[key]}</li>
            ))
          : ""}
      </ul>
      <ul>
        {putUser
          ? Object.keys(putUser).map((key) => <li key={key}>{putUser[key]}</li>)
          : ""}
      </ul>
      <ul>
        {deleteUser
          ? Object.keys(deleteUser).map((key) => (
              <li key={key}>{deleteUser[key]}</li>
            ))
          : ""}
      </ul>
    </div>
  );
}
