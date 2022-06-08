

Tokyo2020 is a website where users can create and review popular tourist destinations. In order to review or create a , you must have an account. 

This project was created using Node.js, Express, MongoDB, and Bootstrap. Passport.js was used to handle authentication.
APIs: Google Maps API

Features
Users can create, edit, and remove tourist recommendations.
Users can review recommendations once, and edit or remove their review
User profiles include more information on the user (full name, email, phone, join date), their recommendations, and the option to edit their profile or delete their account
Search recommendations by name or location
Sort recommendations by highest rating, most reviewed, lowest price, or highest price
Run it locally
Install mongodb
Create a cloudinary account to get an API key and secret code
git clone repository
cd tokyo2020
npm install
Create a .env file (or just export manually in the terminal) in the root of the project and add the following:

DATABASEURL='<url>'
API_KEY=''<key>
API_SECRET='<secret>'
Run mongod in another terminal and node app.js in the terminal with the project.

Then go to localhost:3000.

