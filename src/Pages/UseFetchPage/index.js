import React from "react";
import { useFetch } from "./useFetch";

const baseUrl = "https://jsonplaceholder.typicode.com";

const UseFetchPage = () => {
  const { data, fetchUrl } = useFetch(baseUrl, "users");

  return (
    <div>
      <h1>UseFetch</h1>
      <button onClick={() => fetchUrl("users")}>Users</button>
      <button onClick={() => fetchUrl("posts")}>Posts</button>
      <button onClick={() => fetchUrl("todos")}>Todos</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default UseFetchPage;

// import React from "react";
// import { useFetch } from "./useFetch";

// const baseUrl = "https://jsonplaceholder.typicode.com";

// const UseFetchPage = () => {
//   const { data: userData } = useFetch(baseUrl, "users");
//   const { data: postData } = useFetch(baseUrl, "posts");

//   return (
//     <div>
//       <h1>User</h1>
//       {userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}

//       <h1>Post</h1>
//       {postData && <pre>{JSON.stringify(postData[0], null, 2)}</pre>}
//     </div>
//   );
// };

// export default UseFetchPage;
