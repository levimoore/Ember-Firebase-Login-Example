import Ember from 'ember';

var ref = new Firebase("https://bankroll-api-v1.firebaseio.com");


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
	loginUser: function(){
		var _this = this;
		ref.authWithPassword({
			email: this.get('userEmail'),
			password: this.get('userPassword')
		}, function(error, authData) {
	  if (error === null) {
	    console.log("User Logged in.");
	    _this.set('token', authData.token);

	} else {		
	    console.log(error);
	    _this.set('error', error);
	}

	   var attemptedTransition = _this.get('attemptedTransition');
        if (attemptedTransition) {
          attemptedTransition.retry();
          _this.set('attemptedTransition', null);
          console.log(attemptedTransition);
          
	  } else {
	  	_this.transitionToRoute('leagues');
	  }
		});
	}
}
});
// we would probably save a profile when we register new users on our site
// we could also read the profile to see if it's null
// here we will just simulate this with an isNewUser boolean
var isNewUser = true;

ref.onAuth(function(authData) {
  if (authData && isNewUser) {
    // save the user's profile into Firebase so we can
    // list users, use them in security rules, and show profiles
    ref.child('users').child(authData.uid).set(authData);
  }
});
