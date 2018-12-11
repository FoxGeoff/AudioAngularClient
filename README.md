# AudioAngularClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Project Work Log:

## Check: Add Bootstrap 4 Ref: https://getbootstrap.com/docs/4.0/getting-started/introduction/
* Add to index.html: ``` <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"> ```
* Add to end of index.html:
```
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
```

## Check: Add Nav bar (reponsive)
* https://getbootstrap.com/docs/4.0/components/navs/#working-with-flex-utilities

## Check: Add Table
* https://getbootstrap.com/docs/4.0/content/tables/#examples

## Check: Add Fontawesome
* https://fontawesome.com/start
* ``` <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"> ```
* 
```
<span style="font-size: 3em; color: Tomato;">
  <i class="fas fa-microphone-alt ">Audio Impact</i>
</span>
```
## Check Add Service test-items 
* Run: ``` ng g service test-items\test-item --dry-run ```

## Check: Simulate a data server
* https://angular.io/tutorial/toh-pt6#simulate-a-data-server
* Run: ``` npm install angular-in-memory-web-api --save  ```
* src/app/app.module.ts (In-memory Web API imports)
* Add: Enable Http services: **Add to src/app/app.module.ts (In-memory Web API imports):** 
```
import { HttpClientModule} from '@angular/common/http' ;
```
* Run: ``` ng g service shared\InMemoryData ```
* Add:
 ```
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
```
## Check: Add code test-items.service.ts
* https://angular.io/tutorial/toh-pt6#heroes-and-http
* Add: ``` import { HttpClient, HttpHeaders } from '@angular/common/http'; ```

## Check: Fix Error in app.module (error: blocked CORS):
```
 imports: [
    BrowserModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],


*  **To be continued after the message service is added**