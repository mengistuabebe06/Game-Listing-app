import React, { useEffect, useState } from "react";
import GenreList from "../Components/GenreList";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../Components/Banner";
import TradingGames from "../Components/TradingGames";

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
      <div className="col-span-1 md:col-span-1 ">
        {gameList?.length > 0 ? (
          <div>
            <Banner gameBanner={gameList[0]} />
            <TradingGames gameList={gameList} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
