## Setup

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

## Available Scripts

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

### `yarn start`

Runs your app in development mode.

#### `yarn test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### `yarn ios`

Like `yarn start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

## App folder structure

```
.env
.env.example
App.js
├── src
│   ├── screens
│   │   ├── HomeScreen.js
│   │   └── MovieScreen.js
│   ├── components
│   │   ├── Icons.js
│   │   ├── Loading.js
│   │   ├── MovieItem.js
│   │   └── search.js
│   ├── hooks
│   │   └── useDebounce.js
│   └── utils
│       └── request.js
```

## What could have done better

- SafeArea for app
- Better loading
- Better design
- Testing
- Animations for search and movie item
- Maybe more item to display for movie details
- Maybe caching?
- For larger projects we could use context api for state management