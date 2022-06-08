# [Lorem Picsum](https://picsum.photos/) Image Editor

A react app built using [React](https://reactjs.org/), [MUI](https://mui.com/), and [React Router](https://reactrouter.com/). This project was generated using [Nx](https://nx.dev).

The app is live on https://picsum-image-editor.netlify.app/

## Features:

- Search through the list of images.
  - Images list is paginated.
  - Image item includes image preview and author's name.
- Click on an image will navigate to the edit image page.
- Edit image:
  - Can select image size [height, width]
  - Can choose greyscale mode.
  - Can blur the image (grade between 1 - 10)
  - Should see the currently edited image preview
- Download edited image
- Refresh the page at any point and you still get the previous result
- Remembers where you were when going back in history

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
