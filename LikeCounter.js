import { useEffect, useState } from "react";

import React from "react";

export default function LikeCounter() {
  const initiaNumlikes = 0;
  const [numLikes, setnumLikes] = useState(initiaNumlikes);
  //console.log(`what are these`, numLikes, setnumLikes);

  const increment = () => {
    console.log(`Yes, clicked`, numLikes);
    setnumLikes(numLikes + 1);
  };
  console.log("A render!");

  //   useEffect(() => {
  //     console.log("The useEffect action!");
  //   }, [numLikes]);
  return (
    <div>
      <p>
        This post has <b>{numLikes}</b>Likes!
      </p>
      <button onClick={increment}>+</button>
      <button onClick={() => setnumLikes(numLikes - 1)}>-</button>
      <button onClick={() => setnumLikes(initiaNumlikes)}>Reset</button>
    </div>
  );
}
