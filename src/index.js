import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function GitHubUser({ login }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, [login]);
  if (data) {
    return (
      <div>
        <h1>{data.login}</h1>
        <img src={data.avatar_url} width={100} alt="Nothing to show" />
        <div>{JSON.stringify(data)}</div>
      </div>
    );
  }
  return null;
}

function App() {
  return <GitHubUser login="andrea-vel-cas" />;
}

ReactDOM.render(<App />, document.getElementById("root"));
