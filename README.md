This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


Lage prod-versjon i docker: https://mherman.org/blog/dockerizing-a-react-app/

## Use with Docker

To run with docker:

1. Run ```docker build -t ois/temperature-client .``` to build docker image.
2. Run ```docker run -p 3000:3000 -d ois/temperature-client``` to run docker image.
3. Open browser ```http://localhost:3000```
4. Run ```docker-compose down``` to stop docker.

## Expose service to GCP (first time)

```kubectl expose deployment temperature-client --type=ClusterIP --port 3000 --target-port 3000```
## Deploy a new version to GCP

```export PROJECT_ID=ois-project-95773```

```docker build -t gcr.io/${PROJECT_ID}/temperature-client:latest .```

```docker push gcr.io/${PROJECT_ID}/temperature-client:latest```

```kubectl set image deployment/temperature-client temperature-client=gcr.io/${PROJECT_ID}/temperature-client:latest```

Open browser ```http://34.89.148.214/´´´

## Restart service

```kubectl scale deployment temperature-client --replicas=0```

```kubectl scale deployment temperature-client --replicas=1```


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
