import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('authenticated');
  this.route('signup');
  this.route('login');
  this.route('logout');
  this.route('email');
  this.route('create');
  this.route('secret');
});

export default Router;
