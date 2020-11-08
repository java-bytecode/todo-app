# Todo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## ng lint

`ng lint` checks for the code violations. It uses TSLint as default linting tool.

`tslint.json` is the file which stores the rules for the coding standards of the application.

## ng test
### Unit Testing

`ng test` is used to run unit tests.

`karma.conf.js` is the configuration for **karma** which runs the tests.

`jasmine` is the framework used to create the unit tests.

**Tests** are called **specifications** in the frontend world.

**filename.spec.ts** is where tests are written.

## ng e2e
### End To End Testing

In Unit testing, we test each component. In E2E testing we build and run the complete application and write tests around it.

We use **Protactor** for end to end testing. It is a layer around Selenium API. 

Selenium is a popular framework for writing Automation tests across languages.

_Keywords:_ Chrome Driver, Selenium, Protactor

## angular.json

Defines what should happen when we run specific commands.

Example, `ng build`, `ng test`, `ng e2e` etc.

## Data Binding

Taking the value from the data in the component (.component.ts) and displaying in the template (.component.html).

## Components & Modules

Every angular component (@Component) belongs to a module in the angular app (@NgModule).

`@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],`

## OnInit Interface

OnInit is the interface which contains the method `ngOnInit()`.

`ngOnInit()` fires up when the component is initialized.

## Javascript Module

A module in JS is a combination of classes and method definitions in a single file.

A module is a single file.

## Types of Data Binding

**Property binding**: Data flows from the component to a property of an element in the DOM. It's used to bind a component member variable to an attribute of a DOM such as the value attribue of an `<input>` tag (For example: `<input type="text" [value]="foobar">`). We use brackets for property binding.

**Event binding**: Data flows from the DOM to the component. When a DOM event, such as a click, is triggered, the bound method from the component is called. For example: `<button (click)="printUserName()">Hi</button>` - The `printUserName()` method will be called so it needs to be defined in the component class. We use parentheses for event binding.

## Component Property && Component Event

**Component Property** = Variables in a component
**Component Event** = Methods in a component

## Angular Directives

Angular Directives are specific things which add extended meaning to what is present in HTML. 

**ngModel** is tied to the **value** attribute of the HTML elements like textarea, input etc.

**ngIf** is another angular directive which displays the content of the element only if the assigned variable is true.

## App Routing
`app-routing.module.ts` is the module which handles the routes.

`<router-outlet>` is the tag which enables the display of whatever the router is producing. It inserts whatever component that gets matched based on the current browser's URL.

## Dependency Injection (DI)

Angular takes in the built-in router and make it available in the component. This is called **"Dependency Injection"**.

When a component wants to use another component. Then it is called a dependency.

`navigate()` helps us to route to a specific page. 

`this.router.navigate(['welcome'])`

The first argument of the array is the page you want to navigate to.

DI is a coding pattern in which a class asks for dependencies from external sources rather than creating them itself.


