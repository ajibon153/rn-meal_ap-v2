import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';
import React, { useContext, useLayoutEffect } from 'react';
import { MEALS } from '../data/dummy';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
import { FavoriteContext } from '../store/context/favorite-context';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/favorite';

export default function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  // const FavoriteMealsData = useContext(FavoriteContext);
  const FavoriteMealsData = useSelector((state) => state.favoriteMeal);
  const dispatch = useDispatch();

  const mealIsFavorite = FavoriteMealsData.ids.includes(mealId);
  console.log('mealIsFavorite', mealIsFavorite);
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function changeFavoriteHandler() {
    if (mealIsFavorite) {
      dispatch(removeFavorite({ id: mealId }));
      // FavoriteMealsData.removeFavorite(mealId);
    } else {
      dispatch(addFavorite({ id: mealId }));
      // FavoriteMealsData.addFavorite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          onPress={changeFavoriteHandler}
          icon={mealIsFavorite ? 'star' : 'star-outline'}
          color={'white'}
        />
      ),
    });
  }, [navigation, headerButtonPressHandler]);

  function headerButtonPressHandler() {}

  return (
    <ScrollView style={styles.rootContainer}>
      <View>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.detailText}
        />
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle>Ingedrients</Subtitle>
            <List dataList={selectedMeal.ingredients} />

            <Subtitle>Steps</Subtitle>
            <List dataList={selectedMeal.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    margin: 8,
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
