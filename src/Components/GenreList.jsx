import React, { useEffect } from "react";
import GlobalApi from "../Services/GlobalApi";

function GenreList() {
  const getGenreList = () => {
    GlobalApi.getGenreList.then((response) => {
      console.log(response.data.results);
      //   return response.json();
    });
  };

  useEffect(() => {
    getGenreList();
  }, []);
  return <div>genrelat list</div>;
}

export default GenreList;
