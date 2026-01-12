import { useState, useEffect, useCallback } from 'react';

const FAVORITES_KEY = 'cocktail-favorites';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_KEY);
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch {
        setFavorites([]);
      }
    }
  }, []);

  // Save to localStorage whenever favorites change
  const saveFavorites = useCallback((newFavorites: string[]) => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  }, []);

  const addFavorite = useCallback(
    (recipeName: string) => {
      const newFavorites = [...favorites, recipeName];
      saveFavorites(newFavorites);
    },
    [favorites, saveFavorites],
  );

  const removeFavorite = useCallback(
    (recipeName: string) => {
      const newFavorites = favorites.filter(name => name !== recipeName);
      saveFavorites(newFavorites);
    },
    [favorites, saveFavorites],
  );

  const toggleFavorite = useCallback(
    (recipeName: string) => {
      if (favorites.includes(recipeName)) {
        removeFavorite(recipeName);
      } else {
        addFavorite(recipeName);
      }
    },
    [favorites, addFavorite, removeFavorite],
  );

  const isFavorite = useCallback(
    (recipeName: string) => {
      return favorites.includes(recipeName);
    },
    [favorites],
  );

  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    favoritesCount: favorites.length,
  };
};
