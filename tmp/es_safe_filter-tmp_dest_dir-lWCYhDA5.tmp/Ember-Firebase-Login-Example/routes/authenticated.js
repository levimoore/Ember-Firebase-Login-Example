import Ember from 'ember';
import DS from 'ember-data';

var ref = new Firebase("https://<YOUR FIREBASE INFO HERE>.firebaseio.com");

export default Ember.Route.extend({

beforeModel: function(transition){
  var _this = this;
  var authData = ref.getAuth();
  var loginController = _this.controllerFor('login');
  loginController.set('attemptedTransition', transition);

if (authData) {
  // user authenticated with Firebase
  console.log("Valid User");

} else {

  _this.transitionTo('login');
  // user is logged out
}
}
});