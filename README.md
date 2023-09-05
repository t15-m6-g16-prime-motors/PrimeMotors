# 🚙 PrimeMotors - Plataforma de anúncio de carros 🚙
Documentação FRONTEND: https://github.com/t15-m6-g16-prime-motors/PrimeMotors/tree/developer/frontend#readme

## Instructions

### Starting frontend
This project uses node and postgreSQL. So, it is important to check if you already have these programs intalled on your machine.

    1. Clone this repository on your machine.
        $ git clone <ssh_key>

    2. Open the cloned repository folder

    3. On your terminal:
        $ cd ./frontend (to enter the frontend folder)
        $ npm install (to install all the dependencies)
        $ npm run dev (to check if it running properly)

    4. Pass the Local url provided in the terminal to the VITE_URL Env variable in the backend folder.
        ATTENTION: the url must be without "/" in the end!!!!!

### Starting backend

    1. Create a SQL database through PostgreSQL using your terminal:
        $ psql
        $ CREATE DATABASE <your_db_name>;

    2. On your terminal:
        $ cd ./backend (to enter the backend folder)
        $ npm install (to install all the dependencies)

    3. Populate the .env file with your the required information and run this command:
        $ npm run dev (to check if it is running properly)

    4. Migrate all the existent migrations with the following command:
        $ npm run typeorm migration:run -- -d src/data-source

    5. Enter the Local url link provided in the frontend terminal with cntrl + click, register your account and enjoy the app.

    OBS: remember to run the backend and frontend simutaneously.

### API Endpoints:

| Method | Endpoint                       | Description                           | Authentication                             |
| ------ | ------------------------------ | ------------------------------------- | ------------------------------------------ |
| POST   | /cars                          | Create car                            | Only Sellers user, token is required       |
| GET    | /cars                          | List all cars                         | Any user, token is not required            |
| GET    | /cars/:id/                     | Retrieve one car by ID                | Any user, token is not required            |
| PATCH  | /cars/:id/                     | Update a car                          | Just car owner, token is required          |
| DELETE | /cars/:id/                     | Delete a car                          | Just car owner, token is required          |
| POST   | /login                         | Generate authentication token         | Any user, token is not required            |
| POST   | /users/                        | User creation creation                | Any user, token is not required            |
| GET    | /users/                        | List all users                        | Any user, token is required                |
| GET    | /users/:id/                    | Retrieve one user by ID               | Any user, token is required                |
| PATCH  | /users/:id/                    | Update user by id                     | Just user owner account, token is required |
| GET    | /comments/                     | Retrive all comments from a given car | Just user owner account, token is required |
| POST   | /comments/:id/                 | Create a comment in a given car ID    | Any user, token is required                |
| GET    | /comments/:id/                 | Retrive a comment                     | Just comment owner, token is required      |
| PACTH  | /comments/:id/                 | Update a comment by ID                | Just comment owner, token is required      |
| DELETE | /comments/:id/                 | Delete a comment by ID                | Just comment owner, token is required      |
