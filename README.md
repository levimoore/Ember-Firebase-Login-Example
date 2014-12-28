# Ember-firebase-login-example

This is a work flow for web app authentication using [Firebase](https://www.firebase.com/) with Ember via [Ember-CLI.](http://www.ember-cli.com/) 

You will need to sign up for Firebase. Their documentation is good, and you can find out more about how it works [here.](https://www.firebase.com/how-it-works.html) Once you have an account create a new Firebase for your app and copy your unique Firebase url.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)

## Installation

* `git clone https://github.com/levimoore/Ember-Firebase-Login-Example.git` this repository
* change into the new directory
* `npm install`
* `bower install`

###Once you have a link to your Firebase...

You will need to update the following files:
#####config/environment.js
In the first fucntion of the Environment.js file add the name of your Firbase instance to the ENV object. ***Just the name!*** You do not need the full url for this file.

	/* jshint node: true */

	module.exports = function(environment) {
  	var ENV = {
    	firebase_instance: '<THE NAME OF YOUR FIREBASE>',
    	modulePrefix: 'Ember-Firebase-Login-Example',
    	environment: environment,
    	baseURL: '/',
    	locationType: 'auto',
    	EmberENV: {
      	FEATURES: {
        	// Here you can enable experimental features on an ember canary build
        	// e.g. 'with-controller': true
      		}
    	},
    
#####App/adapters/application.js
In the application adapter file is where Ember Data is implemented and directed to use Firebase as your store. This file should not need updating, as it pulls its information from your config file.

	import DS from 'ember-data';
	import ENV from 'Ember-Firebase-Login-Example/config/environment';

	export default DS.FirebaseAdapter.extend({
  		firebase: new window.Firebase('https://' + ENV.firebase_instance + '.firebaseio.com')
	});
#####In the third line of of the following controller files (all of them) you will need to add the url of your newly created Firebase:
	App/controllers/application.js
	App/controllers/create.js
	App/controllers/login.js
	App/controllers/password.js
	App/controllers/signup.js
	
	1 import Ember from 'ember';
	2
	3 var ref = new Firebase("https://<YOUR FIREBASE HERE>.firebaseio.com");
	4
	5 export default Ember.Controller.extend({
	6      ............
	7   }
	8 };
#####In the Firebase Dashboard you will need to configure the password reset email on the login and auth tab...
![My image](https://raw.githubusercontent.com/levimoore/Ember-Firebase-Login-Example/2651e1750904cd6e0720774aab5debe7280e91ba/img/email1.png)

You configure the password reset email with the string %TOKEN% in the body of your email text. This will provide a temporary password for the user allowing them to pick a permanent password. In the current workflow, when a user first signs up for your application they are logged in, immediately logged out, and then sent a "confirmation" email, which is really a password reset email. This allows for "hacky" email verification step for new users. The body of your password reset email should probaly toe the line between a welcome message, and an actual password reset, as you will use the same email for both.



## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

