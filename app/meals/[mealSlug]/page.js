import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export const generateMetadata = async ({ params }) => {
  const meal = getMeal(params.mealSlug);
  if (!meal) {
    notFound(); //it will trigger the nearest error or not-found , if error is there nearest , that will get triggered instead of not-found.js
  }
  return {
    title: meal.title,
    description: meal.summary,
  };
};

const MealsDetailsPage = ({ params }) => {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound(); //it will trigger the nearest error or not-found , if error is there nearest , that will get triggered instead of not-found.js
  }
  meal.instructions = meal.instructions.replace(/\n/g, "<br>");
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill></Image>
        </div>
        <div>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </div>
  );
};
export default MealsDetailsPage;
