# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Wordpress connection

The React application is dynamically connected to your installed Wordpress database through REST API with [http://localhost/wp-json/wp/v2/posts]. This means that in order to render information, React need you to have a connection running.

If you haven't installed Wordpress locally yet you can do it here [https://wordpress.org/support/article/how-to-install-wordpress/]

This connection makes it possible for any locally stored Wordpress posts to be rendered in the React frontend.

## How to use

If you have locally stored Wordpress posts and want to try render them through our React application follow these steps:

1. Clone the GitHub repository
2. Run `npm install` to get the node modules
3. Run `npm start` to start the React application
4. Navigate to [http://localhost:3000](http://localhost:3000)
