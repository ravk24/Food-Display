const sql = require("better-sqlite3");
const db = sql("meals.db");

const indianMeals = [
  {
    title: "Besan ka Ladoo",
    slug: "besan-ka-ladoo",
    image: "/images/besan-ladoo.png",
    summary:
      "Sweet and melt-in-your-mouth Indian sweet made with gram flour, ghee, nuts, and spices.",
    instructions: `
      1. Roast the gram flour (besan):
        Dry roast besan in a pan over medium heat until golden brown and fragrant.

      2. Prepare the sugar syrup:
        In a separate pan, combine sugar and water. Heat until sugar dissolves and the syrup reaches a one-string consistency.

      3. Combine and shape:
        Mix the roasted besan with hot ghee, chopped nuts, and cardamom powder. Add the sugar syrup gradually and mix well.

      4. Shape into ladoos:
        Form the mixture into bite-sized balls while it's still warm.

      5. Serve:
        Let the ladoos cool and solidify before serving. Enjoy as a sweet treat!
    `,
    creator: "Anita Sharma",
    creator_email: "anita.sharma@example.com",
  },
  {
    title: "Chicken Malwani",
    slug: "chicken-malwani",
    image: "/images/chicken-malwani.png",
    summary:
      "Spicy and flavorful chicken dish from the Malwan region of India, known for its coconut and red chili base.",
    instructions: `
      1. Marinate the chicken:
        Mix chicken pieces with yogurt, ginger-garlic paste, red chili powder, turmeric, coriander powder, and other spices. Marinate for at least 30 minutes.

      2. Cook the chicken:
        Heat oil in a pan and fry onions until golden brown. Add the marinated chicken and cook until browned.

      3. Add coconut and spices:
        Add coconut milk, water, and additional spices like garam masala and kokum. Simmer until the chicken is cooked through and the sauce thickens.

      4. Garnish and serve:
        Garnish with chopped coriander leaves and serve hot with rice or roti.
    `,
    creator: "Vikram Patel",
    creator_email: "vikrampatel@example.com",
  },
  {
    title: "Prawn Koliwada",
    slug: "prawn-koliwada",
    image: "/images/prawn-koliwada.png",
    summary:
      "Crispy and flavorful fried prawns marinated in a spicy coconut and gram flour batter, a popular Konkani dish.",
    instructions: `
      1. Clean and marinate the prawns:
        Clean and devein the prawns. Marinate with lemon juice, ginger-garlic paste, red chili powder, turmeric, and salt.

      2. Prepare the batter:
        Mix gram flour (besan) with water to create a thick batter. Add chopped onions, green chilies, and coriander leaves.

      3. Coat and fry the prawns:
        Dip the marinated prawns into the batter and coat evenly. Deep fry in hot oil until golden brown and crispy.

      4. Serve:
        Drain excess oil and serve hot with a side of lemon wedges and chutney.
    `,
    creator: "Aisha Khan",
    creator_email: "aishakhan@example.com",
  },
  {
    title: "Stuffed Mushroom",
    slug: "stuffed-mushroom",
    image: "/images/stuffed-mushroom.png",
    summary:
      "Vegetarian delight! Mushrooms filled with a flavorful mixture of vegetables, herbs, and spices.",
    instructions: `
      1. Prepare the mushroom caps:
        Clean and remove the stems from the mushrooms. Brush with melted butter or olive oil.

      2. Sauté the filling:
        Heat oil in a pan and sauté chopped onions, vegetables of your choice (e.g., peas, carrots), and spices.

      3. Add breadcrumbs and herbs:
        Mix in breadcrumbs, chopped herbs like parsley, and grated cheese for a creamy texture.

      4. Stuff and bake:
        Fill the mushroom caps with the prepared mixture. Bake in a preheated oven until the mushrooms are tender and the filling is golden brown.

      5. Serve:
        Enjoy these flavorful stuffed mushrooms hot as a side dish or appetizer.
    `,
    creator: "Ramesh Kapoor",
    creator_email: "rameshkapoor@example.com",
  },
  {
    title: "Butter Chicken",
    slug: "butter-chicken",
    image: "/images/butter-chicken.jpg",
    summary:
      "Rich and creamy tomato-based curry with tender pieces of chicken, flavored with aromatic spices and butter.",
    instructions: `
    1. Marinate the chicken:
      Marinate chicken pieces with yogurt, ginger-garlic paste, red chili powder, turmeric powder, and garam masala.

    2. Cook the chicken:
      Heat oil in a pan and sear the marinated chicken pieces until golden brown.

    3. Prepare the gravy:
      In a separate pan, heat oil and fry onions, tomatoes, and cashews until a smooth paste forms.

    4. Combine and simmer:
      Add the cooked chicken and the tomato-cashew paste to a pot. Pour in cream, butter, and water. Simmer until the sauce thickens.

    5. Garnish and serve:
      Garnish with coriander leaves and serve hot with naan or rice.
  `,
    creator: "Rajiv Singh",
    creator_email: "rajivsingh@example.com",
  },
  {
    title: "Gulab Jamun",
    slug: "gulab-jamun",
    image: "/images/gulab-jamun.jpg",
    summary:
      "Soft and spongy fried milk balls soaked in a sweet, fragrant syrup, a classic Indian dessert.",
    instructions: `
    1. Make the dough:
      Mix milk powder, maida flour, baking powder, and a pinch of cardamom powder. Add warm milk gradually and knead into a soft dough.

    2. Shape the jamuns:
      Roll the dough into small balls and deep fry them until golden brown.

    3. Prepare the sugar syrup:
      In a separate pan, dissolve sugar in water and bring to a boil. Add cardamom pods and rose water for flavor.

    4. Soak the jamuns:
      Add the fried jamuns to the sugar syrup and let them soak for at least 2 hours.

    5. Serve:
      Serve the soaked gulab jamuns warm or chilled.
  `,
    creator: "Aarti Desai",
    creator_email: "aartidesai@example.com",
  },
  {
    title: "Paneer Butter Masala",
    slug: "paneer-butter-masala",
    image: "/images/paneer-butter-masala.jpg",
    summary:
      "Creamy and rich tomato-based gravy with soft paneer cubes, flavored with aromatic spices and butter.",
    instructions: `
    1. Marinate the paneer:
      Marinate paneer cubes with turmeric powder and red chili powder.

    2. Fry the paneer:
      Heat oil in a pan and fry the marinated paneer cubes until golden brown.

    3. Prepare the gravy:
      In a separate pan, heat oil and fry onions, tomatoes, and cashews until a smooth paste forms.

    4. Combine and simmer:
      Add the fried paneer, tomato-cashew paste, cream, butter, and water to a pot. Simmer until the sauce thickens.

    5. Garnish and serve:
      Garnish with coriander leaves and serve hot with naan or roti.
  `,
    creator: "Amita Gupta",
    creator_email: "amitagupta@example.com",
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO meals VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

  for (const meal of indianMeals) {
    stmt.run(meal);
  }
}

initData();
