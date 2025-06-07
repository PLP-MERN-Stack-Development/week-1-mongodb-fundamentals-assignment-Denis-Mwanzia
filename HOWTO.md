
# 📘 HowTo: Setup and Run MongoDB Bookstore Project

This guide provides a step-by-step walkthrough to set up and run the **PLP Bookstore MongoDB project** on your local machine using Node.js and MongoDB.

## 🛠 Prerequisites

Before getting started, ensure you have the following installed:

- [Node.js](https://nodejs.org/) and npm
- [MongoDB](https://www.mongodb.com/try/download/community) (locally installed) **OR** a MongoDB Atlas account
- MongoDB Shell (`mongosh`) or MongoDB Compass (optional for GUI)

## 📦 Project Setup

### 1️⃣ Clone the GitHub Repository

Open your terminal and run:

git clone https://github.com/PLP-MERN-Stack-Development/week-1-mongodb-fundamentals-assignment-Denis-Mwanzia.git

cd week-1-mongodb-fundamentals-assignment-Denis-Mwanzia

## 2️⃣ Install Dependencies
Ensure the required MongoDB dependency is installed:

**npm install mongodb**

## 3️⃣ Create Database and Collection
Using MongoDB shell or Compass, you can manually create:

A database called:**plp_bookstore**

A collection called: **books**

## 4️⃣ Populate the Database
Run the insert script to populate your database with sample book data:

**node insert_books.js**



## 5️⃣ Run and Test Queries
Once data is successfully inserted, open the MongoDB shell:

**mongosh**

Then switch to your database:

**use plp_bookstore**

Now copy and paste each query from the queries.js file to test its functionality one by one.

## ✅ Success!
You’ve now successfully set up and run the MongoDB Bookstore project. You can continue to test advanced queries, tweak the data, or expand the project further with additional features.
