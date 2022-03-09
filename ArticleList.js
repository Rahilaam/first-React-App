import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import axios from "axios";
// const data = [
//   {
//     id: 1,
//     title: "What is React all about?",
//     body: "React is all about one-way data flow, the Virtual DOM, and transpiling JSX.",
//   },
//   {
//     id: 2,
//     title: "A lovely kid",
//     body: "In fact, a kid is also the name of a baby goat!",
//   },
//   {
//     id: 3,
//     title: "On placeholder image URLs",
//     body: "So yeah, you won't be able to look these images up. They're placeholders",
//   },
// ];
export default function ArticleList() {
  const [articles, set_articles] = useState([]);
  console.log(`displaying articles`, articles);
  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("I'm gonna fetch some data!");

      // Getting back data from the net, through the wire, air, and the ocean:
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );

      console.log("Got back:", res);
      set_articles(res.data);
    }
    doSomeDataFetching();
  }, []);
  return (
    <div>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      {
        /* TODO */
        articles.map((article, index) => {
          return (
            <div key={index}>
              <ArticleCard title={article.title} content={article.body} />
            </div>
          );
        })
      }
      {/* <button onClick={() => set_articles([])}>
        {articles.length !== 0 ? "Hide article" : "Show article"}
      </button> */}
      {/* <button
        onClick={() => {
          articles.length ? set_articles([]) : set_articles(data);
        }}
      >
        {articles.length ? "Hide article" : "Show article"}
      </button> */}
      <button onClick={() => set_articles([])}>
        {articles.length !== 0 ? "Hide article" : "Show article"}
      </button>
    </div>
  );
}
