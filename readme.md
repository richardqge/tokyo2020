# topyo2020 - Social Media Full Stack Application

<p align="center">
</p>
<h2 align="center">:zap: tokyo2020 :zap:</h2>
<p align="center">
   <a href="https://travis-ci.org/anikethsaha/Ecommerce-Full-Boilerplate-With-Admin/branches">
    <img alt="badgeprs" src="https://travis-ci.org/anikethsaha/Ecommerce-Full-Boilerplate-With-Admin.svg?branch=master" />
  </a>
  <a href='https://coveralls.io/github/anikethsaha/Ecommerce-Full-Boilerplate-With-Admin?branch=master'><img src='https://coveralls.io/repos/github/anikethsaha/Ecommerce-Full-Boilerplate-With-Admin/badge.svg?branch=master' alt='Coverage Status' /></a>

  <a href="https://gitter.im/Ecommerce-Full-Boilerplate-With-Admin/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge">
    <img alt="badgeprs" src="https://badges.gitter.im/Ecommerce-Full-Boilerplate-With-Admin/community.svg" />
  </a>
  <a href="https://dependabot.com/">
    <img alt="badgeprs" src="https://badgen.net/badge/Dependabot/enabled/green?icon=dependabot" />
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img alt="badgeprs" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <img alt="badgeprs" src="https://img.shields.io/badge/PRs-Welcome-green.svg" />
</p>

<p align="center">
  This is full-stack social media website designed for the Tokyo 2020 Olympics ( Boilerplate and Configuration Enabled ), with full CRUD functionality and Google Maps API integration for geo location.
</p>
<br><br>

![Tokyo2020](https://user-images.githubusercontent.com/50726914/172626430-84017112-6663-4a3e-8049-4ab9463082a3.png)

Tokyo2020 is a website where users can create and review popular tourist destinations. In order to review or create a , you must have an account. 

This project was created using Node.js, Express, MongoDB, and Bootstrap. Passport.js was used to handle authentication.
APIs: Google Maps API


### Features ###
* Users can create, edit, and remove tourist recommendations.
* Users can review recommendations once, and edit or remove their review
* User profiles include more information on the user (full name, email, phone, join date), their recommendations, and the option to edit their profile or delete their account
* Search recommendations by name or location
* Sort recommendations by highest rating, most reviewed, lowest price, or highest price

### Run it locally ###
- Install mongodb
- Create a cloudinary account to get an API key and secret code
- git clone repository
- cd tokyo2020
- npm install
- Create a .env file (or just export manually in the terminal) in the root of the project and add the following:

  - DATABASEURL='<url>'
  - API_KEY=''<key>
  - API_SECRET='<secret>'

- Run mongod in another terminal and node app.js in the terminal with the project. Then go to localhost:3000.

### Acknowledgements ###
Created by Richard Q. Ge (@richardqge). Licensed under the MIT license.
