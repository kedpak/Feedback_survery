# Feedback Survey
## Description

The application is allows a startup founder to send emails out to users to give feedback on his/her product. 

The user will sign up via a google authentication. User then pays for number of emails to send survey to through stripe. User then creates a new campaign which consists of survey content. User then enters a list of emails to send survery to. The email provider then sends email to list of surveyees. The user can see all reports of survey responses. Feedback is tabulated. The surveyees click on a link inside email to provide feedback on product. 

## Environment
OS environment. Development version was built inside OS utilizng npm module and create-react-app. Production version is deployed on Heroku at https://shrouded-tundra-72926.herokuapp.com/ (Application is still under construction!).

## Testing
Testing is done with mocha npm module. 
Test with
``npm test``
 
## Installation

### The following npm modules are used in this application:
* passport
* passport-google-oauth20
* mongoose
* express
* cookie-session
* react-router-dom
* react-redux
* redux-thunk
* stripe
* body-parser
* materialize
* sendgrid
 
### Built with
* Node.js
* MongoDb
* React/Redux

## Authors
Kevin Pak - kedpak10@gmail.com