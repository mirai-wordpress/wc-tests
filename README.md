Web Components Mirai Tests

This repo will include three (maybe more :) framework tests.

## First test

Angular 4 - React - Polymer

### Requirements of project and framework

# Minimalist final product
The goal would be that you simply need to import a JS and put a tag on the web.
The JS will call our services and load the response on the tag. The parameters you need will be saved in the tag.

# Encapsulation
The test project has to import the final minified JS, which will be hosted in this same repository.
Neither our libraries nor our styles should interact with those of the host web.
To take into account - management of shadow DOM by the framework (native / own)

# Compatibility
The framework must be compatible with IE 10+

# Importing libraries and external components
To keep in mind - How easy is it to embed external components in the framework?

For example:
Airbnb Datepicker https://github.com/airbnb/react-dates

# Capacity and ease of styling
How would we put our styles?
How would they be overwritten in the host web?

# Communication between components
If you have to put more components on the same page, how will they communicate to each other?

# Calls to external services
The test project must be able to call Mirai services to bring data.

# Put into production
To keep in mind - How easy is the deploy process?

# Support and documentation
Threads in Stackoverflow:
Https://stackoverflow.com/search?q=react
Https://stackoverflow.com/search?q=angular+4
Https://stackoverflow.com/search?q=polymer

## Future tests
