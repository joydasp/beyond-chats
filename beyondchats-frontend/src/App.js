import { useEffect, useState } from "react";
import { fetchArticles } from "./api";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then(setArticles);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>BeyondChats Blogs</h1>

      {articles.map(a => (
        <div
          key={a._id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "20px"
          }}
        >
          <h2>{a.title}</h2>
          <p><b>{a.isUpdated ? "Updated Article" : "Original Article"}</b></p>
          <p>{a.content.slice(0, 300)}...</p>
        </div>
      ))}
    </div>
  );
}

export default App;
