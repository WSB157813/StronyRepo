import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { styled } from "@mui/system";

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  border: `2px solid ${theme.palette.primary.light}`,
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[3],
  transition: 'transform 0.3s ease-in-out',

  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Roboto, sans-serif',
  fontSize: theme.typography.body1.fontSize,
}));

export const RecipesList = ({ recipes }) => {
  return (
    <Grid container spacing={3}>
      {recipes.map((recipe, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <StyledCard>
            <CardMedia
              component="img"
              alt={recipe.recipe.label}
              image={recipe.recipe.image}
              sx={{ height: "220px" }}
            />
            <CardContent sx={{ display: "flex", flexDirection: "column" }}>
              <Typography gutterBottom variant="h5" component="div">
                {recipe.recipe.label}
              </Typography>
              <div sx={{ flex: 1 }}>
                <ul className="ingredients">
                  {recipe.recipe.ingredientLines.map((ingredientLine, idx) => (
                    <li key={idx}>{ingredientLine}</li>
                  ))}
                </ul>
                <StyledTypography variant="NutInformation" gutterBottom>
                  <strong>Nutritional Information:</strong>
                </StyledTypography><br/>
                <Typography gutterBottom>
                  <strong>Calories:</strong> {Math.round(recipe.recipe.calories)}
                </Typography>
                <Typography gutterBottom>
                  <strong>Fat:</strong> {Math.round(recipe.recipe.totalNutrients.FAT.quantity)} {recipe.recipe.totalNutrients.FAT.unit}
                </Typography>
                <Typography gutterBottom>
                  <strong>Protein:</strong> {Math.round(recipe.recipe.totalNutrients.PROCNT.quantity)} {recipe.recipe.totalNutrients.PROCNT.unit}
                </Typography>
                <Typography gutterBottom>
                  <strong>Carbohydrates:</strong> {Math.round(recipe.recipe.totalNutrients.CHOCDF.quantity)} {recipe.recipe.totalNutrients.CHOCDF.unit}
                </Typography>
                <Typography gutterBottom>
                  <strong>Sugars:</strong> {Math.round(recipe.recipe.totalNutrients.SUGAR.quantity)} {recipe.recipe.totalNutrients.SUGAR.unit}
                </Typography>
              </div>
            </CardContent>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};
