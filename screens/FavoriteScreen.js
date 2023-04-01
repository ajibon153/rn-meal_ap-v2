import { MEALS } from '../data/dummy';
import { useContext } from 'react';
import MealList from '../components/MealList/MealList';
import { FavoriteContext } from '../store/context/favorite-context';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

export default function FavoriteScreen({ route, navigation }) {
  // const FavoriteMealsData = useContext(FavoriteContext);
  const FavoriteMealsData = useSelector((state) => state.favoriteMeal);

  console.log('FavoriteMealsData', FavoriteMealsData);

  const favoriteMeals = MEALS.filter((meal) =>
    FavoriteMealsData.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0)
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You don't have favorite meals</Text>
      </View>
    );

  return <MealList items={favoriteMeals} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
