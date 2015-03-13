# Different models
* window
* document: allows manipulating by dom (get ElementByID, getElementByTag)

# Callbacks
* Functions to pass to other functions, async

# benefits of 1 page
* Duplicate of data, bad user experience
* quicker loading
* XMLHTTPRequest (XHR) is how to navigate to new view
* Frameworks for this: Angular, Backbone, Ember, React, etc..... new frameworks constantly being developed

# Angular (ng)
* ng-app most important directive: activates app and dom element
* Angular keyword finds apps

# Basic Concepts
* Angular uses HTML as template
* 2 ways binding: model updated when view changes, view changed when
* Directives
* Dependency injection (individual components, use composition to make bigger component)

# code.angularis.org

# Data binding
* sync between model and view -- 2-way data binding

# Directives
* Markers on DOM components
* Attaches event handlers, manipulate DOM. Types of attributes -- Element, attribute, or class
* Uses for reusable HTML code and DOM manipulations -- don't use DOM, use directives

## ng-app
* Initiates code with angular app
* only one AngularJS application per document
* accepts optional attributes

## ng-init
* Writes initiation code to initiate first_number and second_number

## ng-model
* add scope. Binds text/number entering into input, with the view

## ng-controller
* attaches controllers to view

##  {{quick manipulations}}
* Can compute code quickly like <% %> in ruby

## ng-click
* attach to dom element and it will run

## ng-show and ng-hide
* Will set 'none' to css

## ng-repeat
* will dispaly element again

## ng-submit
* submit form

## ng-source
* will not display curly braces until source is loaded

## ng-options
* Dynamically set options of select boxes

## ng-change
* checks to see if DOM's attributes changes

# MVC in Angular
* Model is just properties on scope
* View: templates (erb files) with data bindings
* Controller: Main component in Angular. Contains business logic behind how to decorate view

### Controller
* JavaScript functions, when controller attached, there will be new object instnace
* Anything placed in scope is a model
* properties === model, properties only available at point where controller registered
* Don't use global variables, takes long time to get, uses up global space
* Modularize code, namespace it
#### Use them
* set up initial state scope
* add behavior to scope object
#### DON'T
* put everything into controller. Don't use them to manipulate the DOM
* format input
* filter input
* share code (use module for that)

### Module (angular.module)
* angular.module("sleepEarly", []) --- creates
* angular.module("sleepEarly") --- retrieves existing moidule
* include on page by including name in ng-app
* iife-- immediately included functional elemnt -- all code is encapulated, not polluting normal space, code only executed once.
* container for different parts of app -- inlcude controllers, services, filters, directives, package as reusable components
* CONVENTION: Have module for each feature, and application level module which depends on above modules
#### API
* Factory, filter, controller, directive, config, run -- these are commonly used methods, used to confiugre anular modules

* Personal choice is how to activate 2 modules on one page, either activate 2 DOMS, or use "as" for second instance. Allows 2 different controllers for 2 different scopes for 2 different DOMs

NOTES FROM ANGULAR Day 2
# Module
* factory method used to create service
# Services
* substitutable objects that can be wired together using dependency injection
* can use services to organize and share code across app
* Services have dependencies
* Use calculatorService that is injected
* add as second argument in controller app; inject second module into module instantiation. Can move calculations to service. Then in service file, you can define all these different functions that can then be called by the function; can help you extract out code that can then be used over and over in different functions.
* Services can have their own dependencies
## WHy use services:
* Controllers instantiated only when eneded, discarded when not
# Some services given to Angular.
* $location: parses URL in browser address bar, sync when user changes address
* $http: has example for syntax for it. documentation thorough
* $route: mostly used for switching views based on different state of the app
# Exercise
* Instantiate app "category", has header, and then uses ng-repeat --- category data, dispaly the name
* $.ajax versus $http: more modular, sometimes not have jquery because not dependency for Angular
1) rake db:create db:migrate db:seed
