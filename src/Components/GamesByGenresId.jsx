import React, { useEffect } from "react";

function GamesByGenresId({ gameListByGenres, selectedGenersName }) {
  useEffect(() => {
    console.log("gameListByGenres", gameListByGenres);
  }, []);
  return (
    <div>
      <h2 className="mt-7 text-[30px] font-bold dark:text-white">
        {selectedGenersName} Games
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
        {gameListByGenres.map((items) => (
          <div className="bg-gray-600 p-3 rounded-lg pb-10 h-full hover:scale-110 transition-all ease-out duration-150">
            <img
              src={items.background_image}
              className="w-full h-[80%] rounded-xl object-cover"
            />
            <h2 className="text-[15px] text-white">
              {items.name}
              <span className="p-1 rounded-sm ml-2 text-[10px] bg-green-400 text-green-700 font-medium">
                {items.metacritic}
              </span>
            </h2>
            <h2 className="text-[15px] text-white">
              {items.rating}
              {items.reviews_count}
              {/* {items.suggestions_count} */}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamesByGenresId;
