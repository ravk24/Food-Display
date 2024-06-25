import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

const MealsFetch = async () => {
  const mealsList = await getMeals();
  return <MealsGrid meals={mealsList} />;
};

const MealsPage = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created
          <span className={classes.highlight}> by you</span>
        </h1>
        <p>Chose your favorite recipe and cook it yourself, its easy and fun</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your fovirite recipe!</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <MealsFetch />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
