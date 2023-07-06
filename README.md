## Vidly

A back-end video rental app built to fully grap the concepts of backend development (under development)

### Learning Objectives

---

- APIs with CRUD operations
- Authentication and Authorization
- Database
- Testing
- Error handling
- Logging
- Security
- Caching
- Deployment

### Technologies

---

- Node.js, Express.js, JavaScript, MongoDB, Jest, Mongoose, Postman, Winston, Helmet, Joi, bcrypt, jsonwebtoken, Redis, Heroku

### Getting Started

---

1. Clone the repo

   ```
   git clone https://github.com/kdelpe/Vidly.git
   ```

2. Change directory to the project

   ```
   cd `{project directory name}`
   ```

3. Install dependencies

   ```
   npm install
   ```

4. Copy over the sample `.env` file:

   ```
    cp -nv .env.sample .env
   ```

5. Run the server with NPM:

   ```
   npm start
   ```

6. Open the browser and navigate to:

   ```
   http://localhost:4000/api/customers
   http://localhost:4000/api/movies
   http://localhost:4000/api/rentals
   http://localhost:4000/api/genres
   ```

### Testing

---

Run the tests

```
 npm test
```

### Environment Variables

---

| Variable Name              | Description |
| -------------------------- | ----------- |
| SECRET_KEY=your_secret_key |             |
| DEBUG=True                 |             |
| DB_NAME=your_db_name       |             |
| DB_USER=your_db_user       |             |
| DB_NAME=your_db_password   |             |
| DB_HOST=your_DB_host       |             |
| DB_PORT=your_DB_port       |             |

---

### Features

---

APIs with CRUD operations:

- [x] Customers API
- [x] Movies API
- [x] Rentals API
- [x] Genres API

Database

- [x] MongoDB: NoSQL database

Authentication and Authorization

- [ ] User registration
- [ ] User Authentication
- [ ] User Authorization
- [ ] Password reset
- [ ] User logout

Testing

- [ ] Unit tests: Jest
- [ ] Integration tests: Supertest
- [x] API testing: Postman
- [ ] Test coverage: Jest

Error handling

- [ ] Custom error middleware: Express

Logging

- [ ] Winston: Logging library

Security

- [ ] Helmet: Secure HTTP headers returned by the API
- [x] Joi: Data validation
- [ ] bcrypt: Password hashing
- [ ] jsonwebtoken: Authentication and Authorization

Caching

- [ ] Redis: In-memory data store

Deployment

- [ ] Heroku: Cloud platform for hosting the project

#### Author

---

[Kervens Delpe](https://www.linkedin.com/in/kervensdelpe/)

#### Acknowledgements

---

[Code With Moshe](https://codewithmosh.com/)
