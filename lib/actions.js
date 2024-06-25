"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

//directive
// use client can be written in files/components but use server can be written on functions , to reun those functions explicity and only on server sides

export const shareMeal = async (formData) => {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
};
