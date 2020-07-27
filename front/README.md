# Weather App Front End

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It implements [MaterialUI](https://http://material-ui.com) design framework and consumes [OpenWeatherMap](https://openweathermap.org/api) API if no custom endpoints are passed as eviroment variables. 

## Design
* This app is design with an **offline-first** approach. A custom service worker is implemented for offline use and increased performance. This service worker caches static resources as JavaScript chunks and CSS files for quick loading. It also caches API requests for 15 minutes (asuming weather doesn't change in a 15 minute window 😅, this can be changed). It also allows the user to install the app in mobile or compatible desktop browsers such as Firefox or every Chromium-based browser.
* The weather component is lazy loaded, allowing the app to load first the AppShell (JS and CSS for layout and header).
* It uses TypeScript for development because although non-typed languages are agile, they can get real messy.
* It follows state-of-the-art React design patterns, such as stateless Functional Components and Context Providers with custom hooks. Centralized stores like Redux can be useful in big apps, not quite handy in small concepts.

## Libraries used
Some helpful libraries are used in this project, mainly to reduce boilerplate. 
* Axios: Promise based HTTP client for the browser and node.js. Provides nice interfaces for error handling and request interceptors.
* React-Testing-Library: for testing purposes.
* date-fns: Date object toolbox.
* React-Router: render components via custom routes. Useful with lazy loading.
* React-Use-Is-Online: Nice hook for online/offline checks. (Side note: this is not ideal. This hook make use of navigator.isOnLine).
* React-Error-Boundary: Reduces boilerplate for Error Boundaries.
* react-i18n: localization.
* Eslint, Prettier and Husky: tools for project organization and code look.

## How to try
Run `yarn install` or `npm i` to install dependencies, `yarn build` or `npm build` to build the front-end and `yarn serve` or `npm serve` to serve the project on `localhost:4000`.

## Available Scripts

In the project directory, you can run:

* `yarn start`
Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
* `yarn test`
Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
* `yarn build`
Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.
* `build-sw and clean-cra-sw`
This scripts are used to build the custom service worker under ### `sw-custom.js` for SW design and `sw-buid,js` node script, and removing CRA sw.
*  `yarn serve`
Serves the built project under `/build` directory on port 4000.

## Notes
* This app has 5 cities hard-coded. This is clearly **bad design**, only for demo purposes and should never get to production.
* It uses the browser's Geolocation API to get the user's current location to fetch weather. This should be prompted before firing up the browser's prompt. Browsers like Safari have this feature turned off by default.
* A ready-to-ship app should have a mechanism to warn the user a new service worker has been activated and new features are ready. See `/serviceWorker.ts` file.
* There are two extremely simple tests, as this is a simple demo.
* OpenWeatherMap's AppID is also hard-coded and also **bad design**. This is only for testing purposes and hashes such as keys, IDs or tokens should **never** be versioned.