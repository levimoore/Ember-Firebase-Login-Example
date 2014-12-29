import Ember from 'ember';
import DS from 'ember-data';

var ref = new Firebase("https://<YOUR FIREBASE INFO>.firebaseio.com");

export default Ember.Controller.extend({

reset: function() {
    this.setProperties({
      userEmail: "",
      userPassword: "",
      error: ""
    });
  },

  token: localStorage.token,
  tokenChanged: function() {
    localStorage.token = this.get('token');
  }.observes('token'),

	actions: {
	signUp: function(){
	var _this = this;
	  ref.changePassword({
	  email       : this.get('userEmail'),
	  oldPassword : this.get('oldPassword'),
	  newPassword : this.get('newPassword')
	}, function(error, authData) {
	  if (error === null) {
	  	ref.authWithPassword({
	  		email: _this.get('userEmail'),
	  		password: _this.get('newPassword')
	  	}, function(error, authData){
	  		if (error === null) {
	  			console.log("User logged in.");
	  			_this.set('token', authData.token);
	  		} else {
	  			console.log('User not logged in.');
	  		}
	  	});
	    console.log("Password changed successfully");
	  } else {
	    console.log("Error changing password:", error);
	    _this.set('error', error);
	  }
	   _this.transitionToRoute('secret');
	});
	}
}
});