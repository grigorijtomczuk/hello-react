<div align=center>
	<img src="./.github/img/react-logo.svg" alt="React logo" width=256px>
</div>

<h1 align=center>
	Hello React
</h1>

<p align=center>
	An introductory React project.
</p>

### Prerequisites

Install the required packages with the command:

```
$ npm install
```

### Build

The following command will create an optimized production build of the application in the `dist` folder (the build path can be changed in `.env`):

```
$ npm run build
```

### Run on a local server

You can run the application in development mode on your localhost (http://localhost:3000/hello-react) to view it in a browser (without building in `dist`).

> The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings in the console. 
> <cite>["Create React App" documentation](https://create-react-app.dev/docs/getting-started#npm-start-or-yarn-start)</cite>

Run this command:

```
$ npm start
```

### Deploy

To deploy the application on your GitHub Pages, fork the original repository, then run this command:

```
$ npm run deploy
```

Then, go to your `hello-react` fork settings and under the Pages tab set the deployment source to "branch", then choose the `dist` branch. In this way, the application directory will be sourced from the `dist` branch of your fork.
