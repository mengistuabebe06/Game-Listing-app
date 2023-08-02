import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

function GenreList() {
  const [GenreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const getGenreList = () => {
    GlobalApi.getGenreList.then((response) => {
      console.log(response.data.results);
      //   return response.json();
      setGenreList(response.data.results);
    });
  };

  useEffect(() => {
    getGenreList();
  }, []);
  return (
    <div>
      <h2 className="text-[30px] font-bold dark:text-white">Genre</h2>
      {GenreList.map((items, index) => (
        <div
          key={items.id}
          onClick={() => setActiveIndex(index)}
          className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-slate-400 p-2 group
        rounded-lg hover:dark:text-gray-600 ${
          activeIndex == index ? "bg-gray-300 dark:bg-gray-600" : null
        }`}
        >
          <img
            src={items.image_background}
            className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all
            ease-out duration-300 ${
              activeIndex == index ? "bg-gray-300 dark:bg-gray-600" : null
            }`}
          />
          <h3 className="dark:text-white text-[18px] group-hover:font-bold transition-all ease-out duration-300">
            {items.name}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default GenreList;
