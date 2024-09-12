### React First Project
#### MPOP Reverse II
---
### Introduction
> So since I'm trying to use NodeJS for a year, I try to learn React to proceed to `MERN` stack project. And thank you for a day that I saw a face to face coding that uses ReactJS on our school, and they granted me to learn while they doing it.

---
### Get Started
**Step 1**
> So I do first is to install `npx` on my `npm` so that I can create a new react project. Next is execute this code to your terminal
```Bash
npx create-react-app my-app
```
> So the `my-app` is the project name we want to use, you may modify it like sample or anything you want.

**Step 2**
> Next is to check the `App.js`, your `App.js` is the current main file or layout of your react project, so the main setup can be found on  your `index.js`, which uses `ReactDOM`.


---
### Project Test
**npm start**
> To test this project, there are lists of commands where you can run to your terminal. The first one is `npm start`, this is to start the project. It is autosync, so that you don't need to close or stop the project and re-run again to see the result. Just save the project by pressing `CTRL+S`

**npm test**
> By default, when you run npm test , Jest will only run the tests related to files changed since the last commit. This is an optimization designed to make your tests run fast regardless of how many tests you have. However it assumes that you don't often commit the code that doesn't pass the tests. -[Run test](https://create-react-app.dev/docs/running-tests/#:~:text=By%20default%2C%20when%20you%20run,doesn't%20pass%20the%20tests.)

---
### Use of Components
> There are two ways to use components in react, the first one is the function method and the other one is the use of class method. Here's the sample code below
```nodejs

// Function Method
function MyComponent(){
  return (
    <> {/* INFO: This empty tag is just a container, for you to insert many components inside or elements inside of your components. */}
      <h1>Hello World</h1>
    </>
  );
}

// This is to export and to call to other components.
export default MyComponent;


// Class method
import { Components } from 'react'; // This import is very imortant in this function, because it is the class where we inherit our class name

class MyComponent extends Components {
  // We use render() function as return function
  render() {
    return (
      <>
        <h1>Hello World</h1>
      </>
    )
  }
}

// Export
export default MyComponent

```

> Take note that these two methods are just an example, but in reality, if you create two default exports in a file, it turns to an error. You may export as many as you want, but must no `default` in export.
To call this, you just need to import the file like `import MyComponent from './{component_path}/{component_file}`. And insert something like an html tag like `<MyComponent />`. Always take note that in react, we need to have a closing tag.

---
### Props
> Props is use to pass parameters in reaact to a component. Here's the example.

```nodejs

// Function Method
function MyComponent(props){
  return (
    <> {/* INFO: This empty tag is just a container, for you to insert many components inside or elements inside of your components. */}
      <h1>Hello {props.name}</h1>
    </>
  );
}

// This is to export and to call to other components.
export default MyComponent;


// Class method
import { Components } from 'react'; // This import is very imortant in this function, because it is the class where we inherit our class name

class MyComponent extends Components {
  // We use render() function as return function
  render() {
    return (
      <>
        <h1>Hello {this.props}</h1>
      </>
    )
  }
}

// Export
export default MyComponent

```

> To call this, you just need is to pass a value like `<MyComponent name="Ryann Kim" />`. If you want to use the formalt like this, use the children under of props.
```nodejs

// Function Method
function MyComponent(props){
  return (
    <> {/* INFO: This empty tag is just a container, for you to insert many components inside or elements inside of your components. */}
      <h1>Hello {props.children}</h1>
    </>
  );
}

// This is to export and to call to other components.
export default MyComponent;


// Class method
import { Components } from 'react'; // This import is very imortant in this function, because it is the class where we inherit our class name

class MyComponent extends Components {
  // We use render() function as return function
  render() {
    return (
      <>
        <h1>Hello {this.props.children}</h1>
      </>
    )
  }
}

// Export
export default MyComponent

```
> And you may call it like `<MyComponent>Ryann Kim</MyComponent>`



[More about this](React-README.md)
