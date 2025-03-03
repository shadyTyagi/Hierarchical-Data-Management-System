Country, State, and City Management System
A hierarchical data management application built with React that allows users to create and manage countries, states, and cities without using external libraries.
Features

Hierarchical Structure: Countries contain states, which contain cities
Complete CRUD Operations:

Add, edit, and delete countries
Add, edit, and delete states within countries
Add and delete cities within states

User-Friendly Interface:

Expandable/collapsible sections for better organization
Confirmation dialogs before updates and deletions
Clean and intuitive UI

Data Persistence: All data is saved to localStorage to persist between sessions

Installation

Clone the repository:
git clone (https://github.com/shadyTyagi/Hierarchical-Data-Management-System.git)
cd Hierarchical Data Management System

Install dependencies:
npm install

Start the development server:
npm start

Component Structure
The application consists of four main components:

App.js: Main component that manages application state and provides functions for all operations
CountryList.js: Displays the list of countries with management options
StateList.js: Displays states for a selected country with management options
CityList.js: Displays cities for a selected state with management options

Usage Guide
Managing Countries

Add a Country: Click the "Add Country" button and enter the country name
Edit a Country: Click the "Edit" button next to a country and enter the new name
Delete a Country: Click the "Delete" button next to a country (this will delete all associated states and cities)
View States: Click on a country's name to expand and see its states

Managing States

Add a State: Click the "Add State" button next to a country and enter the state name
Edit a State: Click the "Edit" button next to a state and enter the new name
Delete a State: Click the "Delete" button next to a state (this will delete all associated cities)
View Cities: Click on a state's name to expand and see its cities

Managing Cities

Add a City: Click the "Add City" button next to a state and enter the city name
Delete a City: Click the "Delete" button next to a city
