import React, { useEffect, useState } from "react";
import GenreList from "../Components/GenreList";
import GlobalApi from "../Services/GlobalApi";

function Home() {
  // store the api restult in state var
  const [gameList, setGameList] = useState();
  const getAllGamesList = () => {
    GlobalApi.getGameList.then((res) => {
      console.log(res.data.results);
      setGameList(res.data.results);
    });
  };
  useEffect(() => {
    getAllGamesList();
  }, []);
  return (
    <div className="grid grid-cols-2 px-8">
      <div className="hidden md:block">
        <GenreList />
      </div>
      <div className="col-span-1 md:col-span-1 bg-blue-500">
        <h3>Game List</h3>
        {gameList.map((items) => (
          <div key={items.id}>
            <img src={items.background_image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
