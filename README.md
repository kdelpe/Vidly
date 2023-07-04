## Vidly

### A back-end video rental app built to fully grap the concepts of backend development (under development)

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
   git clone
   ```

2. Change directory to the project

   ```
   cd vidly
   ```

3. Install dependencies

```
npm install
```

4. Create a `.env` file and add the following:

```
SECRET_KEY=your_secret_key
DEBUG=True
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=your_db_host
DB_PORT=your_db_port
```

5. Run the server

```
npm start
```

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

Testing

- [ ] Unit tests: Jest
- [ ] Integration tests: Supertest

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

- [ ] Heroku: Cloud platform

#### Author

---

[Kervens Delpe](https://www.linkedin.com/in/kervensdelpe/)

#### Acknowledgements

---

[Code With Moshe](https://codewithmosh.com/)
