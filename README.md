## Vidly

### A back-end video rental app built with Node and JavaScript

#### Features

- User registration
- User login
- User logout
- User profile
- User password reset
- User password change

#### Technologies

- Node
- Express.js
- JavaScript
- MongoDB
- Jest

#### Installation

1. Clone the repo
2. Create a virtual environment
3. Install dependencies

```
npm install
```

4. Create a .env file and add the following:

```
SECRET_KEY=your_secret_key
DEBUG=True
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=your_db_host
DB_PORT=your_db_port
```

5. Run migrations
6. Run the server

```
npm start
```

7. Create a superuser
8. Login to the admin panel and create a new group called 'staff'
9. Add the 'staff' group to the 'Staff' and 'Admin' permissions
10. Create a new user and add them to the 'staff' group
11. Login to the app with the new user
12. Create a new user and add them to the 'admin' group
13. Login to the app with the new user
14. Create a new user and do not add them to any groups
15. Login to the app with the new user

#### Author

[Kervens Delpe](linkedin.com/in/kervensdelpe/)

#### Acknowledgements

[Code With Moshe](https://codewithmosh.com/)
