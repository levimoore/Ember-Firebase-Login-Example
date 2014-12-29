import Ember from 'ember';

var ref = new Firebase("https://<YOUR FIREBASE INFO>.firebaseio.com");

export default Ember.Controller.extend({
  authed: false,
  currentUser: null,

  actions: {

    createUser: function() {
	    var isNewUser = true;
	    var _this = this;
		ref.createUser({
		  email: this.get('createEmail'),
		  password: Math.random().toString(36).substring(7)
	},

	function(error) {
	  if (error === null) {
	  	ref.resetPassword({
	    email : _this.get('createEmail')
	  }, function(error) {
	  if (error === null) {
	    console.log("Password reset email sent successfully");
		ref.unauth();
	    _this.transitionToRoute('email');
	  } else {
	    console.log("Error sending password reset email:", error);
	  }
	});
		    console.log("User created successfully");
		  } else {
		  	_this.set('error', error);
		    console.log(error);
		  }
		});
		}
	}
});
