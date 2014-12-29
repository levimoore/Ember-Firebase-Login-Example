import Ember from 'ember';

var ref = new Firebase("https://<YOUR FIREBASE INFO>.firebaseio.com");

export default Ember.Controller.extend({

  actions: {

  	    sendReset: function() {
  	    var _this = this;
		ref.resetPassword({
		email: this.get('userEmail')
	},

	function(error) {
	  if (error === null) {
	    console.log("Password reset email sent successfully");
	  } else {
	    console.log("Error sending password reset email:", error);
	  }
		_this.transitionToRoute('password');
	});
		}
	}
});
