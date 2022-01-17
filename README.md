# SWExplorerPeck

## Installation

Clone project and navigate to directory. Run `npm i`: note that this project uses Angular 11 which may cause issues if the local version on your machine is greater. Run `ng s -o` to launch the application.
Additionally, I ran into issues when trying to use Node v17. I solved this by installing `v16.13.2` and running `nvm use --lts` to set the version to v16.

Alternatively, navigate to `https://devincpeck.github.io/` to use the app.

This project demonstrates the use of services and dependency injection (swapi.service.ts), a shared module, rxjs/async patterns, smart and presentational components (one generic presentation list component for all 3 smart components), lazy loading, state management with the ngrx store, and scss.

## Future Improvements

I ran out of time to implement the following, but I think these would lead to both a better user experience as well as more efficient and modular code:
- genericize the detail view components or at least split them into smart and presentation components like I did with the list components
- adding paging for lists of objects
- addding better 'back' navigation, either by adding a clickable arrow in the header or by adding a menu instead of a home button, etc.
- improving the scss
- adding a dark/light theme switching that uses star wars colours. i tried to do a bit of black + star wars yellow in the header
- adding tests
- maybe add a pipe for some of the data, eg some planet populations are hard to read like 1000000000000 for coruscant
- general cleanup!



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
