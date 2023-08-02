import React, { useEffect, useState } from "react";
import GenreList from "../Components/GenreList";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../Components/Banner";
import TradingGames from "../Components/TradingGames";
import GamesByGenresId from "../Components/GamesByGenresId";

function Home() {
  // store the api restult in state var
  const [gameList, setGameList] = useState();
  //  store the game list by genres id
  const [gameListByGenres, setGameListByGenres] = useState([]);
  const [selectedGenersName, setSelectedGenersName] = useState("action");

  const getAllGamesList = () => {
    GlobalApi.getGameList.then((res) => {
      console.log(res.data.results);
      setGameList(res.data.results);
    });
  };
  const getGameListByGenresId = (id) => {
    console.log("GRANTED", id);
    GlobalApi.getGameListByGenreId(id).then((res) => {
      // console.log("game list by using genres id", res.data.results);
      setGameListByGenres(res.data.results);
    });
  };
  useEffect(() => {
    getAllGamesList();
    getGameListByGenresId(4);
  }, []);
  return (
    <div className="grid grid-cols-2 px-8">
      <div className="hidden md:block">
        <GenreList
          genresId={(genresId) => getGameListByGenresId(genresId)}
          selectedGenersName={(name) => setSelectedGenersName(name)}
        />
      </div>
      <div className="col-span-1 md:col-span-1 ">
        {gameList?.length > 0 && gameListByGenres.length > 0 ? (
          <div>
            <Banner gameBanner={gameList[0]} />
            <TradingGames gameList={gameList} />
            <GamesByGenresId
              gameListByGenres={gameListByGenres}
              selectedGenersName={selectedGenersName}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
