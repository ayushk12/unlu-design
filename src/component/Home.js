import React, { useEffect, useState } from "react";
import "./post.css";
import axios from "axios";
import BlogList from "./MovieBox";
import Pager from "./MovieBox";
import { localStorage } from "./LocalDb";
const Home = () => {
  const [list, setList] = useState([]);

  let [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get("https://www.mocky.io/v2/59b3f0b0100000e30b236b7e")
      .then((res) => {
        console.log(res);
        setList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setList]);

  return (
    <div>
      <Pager page={page} setPage={setPage} />

      <div className="movie">
        {list && <BlogList list={list} />}
        <Pager page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default Home;
