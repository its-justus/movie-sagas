# Movie Sagas

Movie Sagas is a simple movie listing website built with React, Redux, and Redux Sagas. It allows a user to view a list of movies, view details of those movies, and edit the details. 

## Installation

Fork and clone the repository to your computer, or download the project zip file and extract it. Ensure you have postgres installed and running before continuing with the following steps.

1. Create a database in Postgres called "saga_movies_weekend".
2. Execute the contents of database.sql within the new database.
3. Run ```npm install``` in the terminal to install the dependencies.
4. Run ```npm run server``` to launch the server.
5. Run ```npm run client``` to launch the webpack client. It should load on your default browser, but if not you can access it at localhost:3000/

## Usage

Click the movie posters to view the movie details. Click the edit button to edit the movie title or movie description. Click save to save your changes and return to the details view.
