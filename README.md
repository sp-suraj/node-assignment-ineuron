# Introduction

This is NodeJS CRUD app using MongoDB as database. Book items can be created/Read/Updated & Deleted. It has swagger as API Documentation. After setup see here how to use [swagger UI](http://localhost:4001/api-docs/#/)

##### It contains:-

1. How to setup
2. What is used
3. Folder Structure

## How To Setup

1. Install Dependencies

```
npm install
```

2. Add Database(MongoDb was used before) here in [config file](src/config/config.ts). Only replace the **_MONGO_URL_** with your mongodb url.

3. Run Server

```
nodemon
```

4. To run test

```
npm run test
```

5. To run jest:coverage test

```
npm run test:coverage
```

---

## What are used

1. For routing- **Express** is Used.

2. For database- **MongoDB** _NoSQL_ Database is used.

- For convenience in the creation and management of data in MongoDB.- **Mongoose** is used

3. For test- **Jest** is used. [More About Jest](https://github.com/facebook/jest)
   `jest --coverage` **test** is done to check if any code line is not skipping.

---

## Folder Structure

> _model file_ contains Model Schema
> _repository file_ manages database actions
> _service file_ takes action from routes, accessing repository returns response to routes

1. [**_item_**](src/items/) folder contains [tests folder](src/items/__tests__), [item Model file](src/items/item.model.js), [item Repository file](src/items/item.repository.js) and [item Service file](src/items/item.service.js)
