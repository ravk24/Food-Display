import fs from "node:fs";
import sql from "better-sqlite3";
import xss from "xss";
import slugify from "slugify";

const db = sql("meals.db");
export const getMeals = async () => {
  //async- for returning a promise , that will require using await
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("failed to fetch");
  return db.prepare("SELECT * from meals").all();
};

export const getMeal = (slug) => {
  return db.prepare("SELECT * from meals WHERE slug= ?").get(slug); //? and .get(slug) to avoid sql injection attack
};

export const saveMeal = async (meal) => {
  meal.slug = slugify(meal.title);
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`); //to create a stream to send image to backend folder

  const bufferedImage = await meal.image.arrayBuffer(); //arrayBuffer, see down.
  stream.write(Buffer.from(bufferedImage), (err) => {
    if (err) {
      throw new Error("Saving of image failed");
    }
  }); //so, now writing the image to file is done (image is stored in the file system), now we need to store this file(overall data) to database.

  meal.image = `/images/${fileName}`;

  db.prepare(
    `INSERT INTO meals
  (title , summary, instructions , creator , creator_email, image , slug) VALUES (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)`
  ).run(meal);
};

//if we put asyc before a function, it will return a promise , which we need await and resolve Eg:  await new Promise((resolve) => setTimeout(resolve, 2000));

//The code you provided,  ```javascript
// return db.prepare("SELECT * from meals WHERE slug= ?").get(slug);
// ``` demonstrates a potential vulnerability called **SQL injection**. Let's break down why we avoid writing code like this and what a safer approach would be.

// **Why We Avoid This Approach:**

// - **Security Risk:** If the `slug` variable is not sanitized properly, malicious users could inject code into the query string, potentially manipulating the database or even gaining unauthorized access.
// - **Error-Prone:** Manually constructing SQL statements can be error-prone and lead to unexpected behavior or database errors.

// **What is SQL Injection?**

// SQL injection is a type of cyberattack where an attacker injects malicious SQL code into a user input field within a query. This code can then be executed by the database server, potentially leading to:

// - **Data Theft:** Attackers can steal sensitive information like usernames, passwords, or other confidential data from your database.
// - **Data Manipulation:** Malicious code can modify, delete, or corrupt data stored in your database.
// - **Unauthorized Access:** In severe cases, attackers might exploit vulnerabilities to gain unauthorized access to the database server itself.

// **Safer Approach: Parameterized Queries**

// To prevent SQL injection attacks, it's strongly recommended to use **parameterized queries**. These queries separate the SQL statement from the user input data. Here's how the code can be rewritten using parameters:

// ```javascript
// const sql = "SELECT * from meals WHERE slug = ?";
// const preparedStatement = db.prepare(sql);
// const result = preparedStatement.get(slug);
// return result;
// ```

// **Explanation of the Safer Code:**

// - The SQL statement is stored separately in the `sql` variable.
// - The `db.prepare(sql)` method creates a prepared statement object.
// - The `slug` variable is passed as a separate argument to the `preparedStatement.get(slug)` method. The database server automatically sanitizes the input value, preventing malicious code injection.

// **Benefits of Parameterized Queries:**

// - **Security:** By separating data from the query, parameterized queries make your application less vulnerable to SQL injection attacks.
// - **Readability:** The code becomes more readable by separating the logic for building the query and executing it with the data.
// - **Maintainability:** Parameterized queries are easier to maintain and reuse in different parts of your application.

// **Conclusion:**

// Always prioritize security when interacting with databases. By avoiding practices like manually constructing SQL statements and embracing parameterized queries, you can significantly reduce the risk of SQL injection attacks and protect your application's data integrity.

//----------------------------------
//arrayBuffer()
// The arrayBuffer() function in JavaScript serves the purpose of creating a fixed-length, raw binary data buffer. It's essentially a chunk of memory allocated to store binary data, often referred to as a "byte array" in other programming languages.

// Here's a breakdown of its key aspects:

// Functionality:

// Allocates a contiguous block of memory in the browser's RAM.
// Represents the allocated memory as an ArrayBuffer object.
// Cannot directly manipulate the contents of the ArrayBuffer itself.

//----------------------------------------------
