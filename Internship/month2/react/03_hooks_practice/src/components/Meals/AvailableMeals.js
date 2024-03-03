import { useState, useEffect } from "react";
import Card from "../UI/Card/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [mealData, setMealData] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://reactapiforpostdata-default-rtdb.firebaseio.com/meals.json/"
      );
      if (!response.ok) {
        throw new Error("Error found in the path of api.");
      }
      const responseData = await response.json();
      const loadMeals = [];
      for (const key in responseData) {
        loadMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMealData(loadMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  const mealsList = mealData.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      {!isLoading ? (
        error.length === 0 ? (
          <Card>
            <ul>{mealsList}</ul>
          </Card>
        ) : (
          <p className={classes.error}>{error}</p>
        )
      ) : (
        <p className={classes.isLoading}> Loading...</p>
      )}
    </section>
  );
};

export default AvailableMeals;
