import React, { useEffect } from "react";

function TradingGames({ gameList }) {
  useEffect(() => {
    console.log("tredning list of game", gameList);
  }, []);
  return (
    <div>
      <h2 className="font-bold text-[30px] dark:text-white">Trending Games</h2>
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-3">
        {gameList.map(
          (items, index) =>
            index < 4 && (
              <div className="bg-[#76a8f75e] rounded-lg p-2 group hover:scale-105 transition-all duration-300 ease-out">
                <img
                  src={items.background_image}
                  className="h-[270px] rounded-top object-cover"
                />
                <h2 className="dark:text-white p-2 text-[20px] font-bold">
                  {items.name}
                </h2>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default TradingGames;
