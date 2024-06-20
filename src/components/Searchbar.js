import * as React from 'react';
import { useState, useCallback } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, IconButton} from '@mui/material';

export const Searchbar = ({ setRecipes }) => {
  const [query, setQuery] = useState("");

  const fetchRecipes = useCallback(async () => {
    try {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?q=${query}&type=public&app_id=f777c5bc&app_key=8fdc007eabdd87ce97166860c7f52aad`);
      const data = await response.json();
      setRecipes(data.hits);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [query, setRecipes]);

  const handleSearchClick = () => {
    fetchRecipes();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchRecipes();
    }
  };

  return (
    <TextField
      label="Find your Recipe!"
      variant="filled"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyPress={handleKeyPress}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleSearchClick}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      fullWidth
    />
  );
};

export default Searchbar;
