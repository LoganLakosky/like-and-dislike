

import { useEffect, useState } from "react";

function App() {
  const [upLikes, setUpLikes] = useState<number>(0);
  const [downlikes, setDownLikes] = useState<number>(0);

  useEffect(() => {
    async function getLikes() {
      const response = await fetch("http://localhost:3001/getlikes", {
        method: "GET",
      });

      const result = await response.text();

      const upLikes: number = parseInt(result.slice(1, 3));

      setUpLikes(upLikes);

      const downLikes: number = parseInt(result.slice(4, result.length - 1));

      setDownLikes(downLikes);
    }
    getLikes();
  }, []);

  return (
    <main className="mainContainer">
      <div className="likesContainer">
        <div className="upLike">{upLikes}</div>
        <div className="downLike">{downlikes}</div>
      </div>
    </main>
  );
}

export default App;
