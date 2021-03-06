## Burger Builder App

<img src="burger-logo.png">
A simple ReactJS application to customize a burger order.  It was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
It contains React components and functional components.  It also uses CSS Modules for styling and PropTypes for static typechecking on the BurgerIngredients.

## Table of Contents

- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)


## Folder Structure



```
burger-builder/
  README.md
  config/
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    assets/
        Images/
    components/
        Burger/
            BuildControls/
                BuildControl/
                OrderSummary/
            BurgerIngredient
        Logo/
        Navigation/
            NavigationItems/
                NavigationItem 
            SideDrawer/
                DrawerToggle/
            Toolbar/ 
        UI/
            BackDrop/
            Button/
            Modal/
    containers/
        BurgerBuilder/
        Layout/
    hoc/           
    App.css
    App.js
    App.test.js
    index.css
    index.js
```


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

