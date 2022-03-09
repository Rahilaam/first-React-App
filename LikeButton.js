import { useState } from "react";

import React from "react";

export default function LikeButton() {
  const [like, setLike] = useState(false);

  return (
    <div>
      <button onClick={() => setLike(!like)}>
        {like ? "Liked" : "click to Like"}
      </button>
    </div>
  );
}
