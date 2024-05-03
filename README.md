# Starz 'n Carz

This project is a mobile-friendly, responsive, one-page application that displays a list of intergalactic characters and the vehicles they drive. The data displayed are available from [SWAPI](https://swapi.dev/) - The Star Wars API.

The project is written in React.js and displays asynchronous loading of data from the external API and uses Redux for state management. It involves the following components:

React Components: The project includes several React components that are responsible for displaying data fetched from an external API. These components are designed to render the data as soon as it is available, and they include UI elements such as loading spinners to indicate when the data is being fetched.

Redux Store: The project uses a Redux store to manage application state. This store contains all of the data retrieved from the external API, as well as any other application state that needs to be managed, such as whether data is currently being fetched or not.

Redux Actions: The project defines Redux actions that are responsible for fetching data from the external API. These actions are dispatched by the React components when they need to retrieve data, and they trigger an asynchronous request to the API using `fetch`.

Redux Reducers: The project defines Redux reducers that are responsible for updating the application state in response to Redux actions. These reducers  update the store with the data retrieved from the API, and they also update any other application state as needed.

Middleware: The project uses redux-thunk middleware to handle the asynchronous nature of API requests and to dispatch Redux actions in response to API responses.

Overall, the project provides a dynamic user interface that displays data as it is asynchronously fetched from an external API, while also using Redux to manage state and ensure that the application remains responsive and performant.

The deployed site can be viewed [here](https://profound-cobbler-0b52dd.netlify.app/).

## The requirements

- Implement a view that contains a list of users and display the following information
  - name
  - height
  - mass
  - gender
  - edited
- Display a `Vehicles` (button)
- When the user clicks the `Vehicles` button a popup is displayed that contains a list of bodacious vehicles with the following information
  - name
  - model
  - manufacturer
  - vehicle class

The list of intergalactic people can be filtered by characters contained in their name. All filtering occurs server-side.

## The tech

- Javascript ES6 (no CoffeeScript, no TypeScript, …)
- React.js
- Redux
- NPM modules
- ESLint
- MUI styled-components

# CRA

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
