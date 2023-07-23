# E-Commerce-Back-End

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
This project is the back end for an e-commerce website built using Express.js and Sequelize to interact with a MySQL database. The application allows users to perform CRUD operations on categories, products, and tags, and it provides API routes to retrieve and manipulate data.

 ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [API Routes](#api-routes)
  - [Walkthrough Video](<#walkthrough-video>)
  - [Technologies Used](#technologies-used)
  - [License](#license)

## Installation
To run the application locally, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies by running npm install in the project directory.
3. Create a .env file in the root of the project and set the following environment variables:
DB_NAME=your_database_name
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
4. Create the database by executing the schema.sql file in the db folder using MySQL shell commands.
5. Seed the database with test data by running npm run seed.
6. Start the application by running npm start or node server.js.

## Usage
Once the application is running, you can use tools like Insomnia Core or Postman to test the API routes.

## API Routes
Categories:

GET /api/categories: Retrieve all categories.
GET /api/categories/:id: Retrieve a single category by its ID.
POST /api/categories: Create a new category.
PUT /api/categories/:id: Update a category by its ID.
DELETE /api/categories/:id: Delete a category by its ID.

Products:

GET /api/products: Retrieve all products.
GET /api/products/:id: Retrieve a single product by its ID.
POST /api/products: Create a new product.
PUT /api/products/:id: Update a product by its ID.
DELETE /api/products/:id: Delete a product by its ID.

Tags:

GET /api/tags: Retrieve all tags.
GET /api/tags/:id: Retrieve a single tag by its ID.
POST /api/tags: Create a new tag.
PUT /api/tags/:id: Update a tag by its ID.
DELETE /api/tags/:id: Delete a tag by its ID.

## Walkthrough Video
Link to the walkthrough video

In the video, you will see how to set up the application, create and seed the database, and test the API routes using Insomnia Core.

## Technologies Used
Express.js
MySQL
Sequelize
dotenv
License
This project is licensed under the MIT license. See the LICENSE file for more details.

## License

This application is covered under the [MIT](https://opensource.org/licenses/https://opensource.org/licenses/MIT) license.
