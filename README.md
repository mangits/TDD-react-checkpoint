# TDD React Checkpoint - Build Server Backed GMDB Front End

### Features:
- Browse movies anonymously
- Look at a specific movie with details and reviews
- Search movies
- Post a review on a movie
- Register a new user

## Acceptance Criteria
- All code is produced through TDD with a pair
- UI tests are performed using Cypress
- All functionality of the application is developed using component based architecture in React
- All persistent data is received and processed through network requests to the back end service
- The application is structured to consume data according to the structure provided by the back end service

## Instructions

#### Available Service Endpoints
- `GET movies` - returns a list of all movies
- `GET movies/:id` - returns details of a specific movie
- `GET movies?search=<query>` - returns a list of movies filtered on titles matching the given query
- `GET reviews/:movieId` - returns all reviews for a given movie
- `POST reviews` - creates a new review, returns success status in JSON response
- `POST register` - creates a new user, returns success status in JSON response

### Front End Setup:
In a new directory
- to test your app, run `npm run test`
- to run your app, run `npm run start`
- - The server will be available at `http://localhost:3000`
# tdd-movies-checkpoint-06and08
