# How to start the express server:

- Make sure you have used the pg_restore tool to create your DB from the dump file.
- create a .env file in the backend/ directory
- For local dev the only thing you might have to change is the user and password.
Depends on how you installed and setup postgres

- Start your react app in a separate terminal
- cd into the /backend directory
- run `npm i`
- run `node index.js`

Backend should now be running on http://localhost:3001

If you get CORS errors make sure you have installed the dependancies. You need the cors package for it to work