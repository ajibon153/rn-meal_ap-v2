import React, { Children, useState } from 'react';

export const FavoriteContext = React.createContext({
  ids: [],
  addFavoriteL: (id) => {},
  removeFavoriteL: (id) => {},
});

export default function FavoritContextProvider({ children }) {
  const [FavoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavorite(id) {
    setFavoriteMealIds((currFav) => [...currFav, id]);
  }

  function removeFavorite(id) {
    setFavoriteMealIds((currFav) => currFav.filter((mealId) => mealId !== id));
  }

  const value = {
    ids: FavoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}
