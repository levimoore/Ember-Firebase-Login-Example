import DS from 'ember-data';
import ENV from 'Ember-Firebase-Login-Example/config/environment';

export default DS.FirebaseAdapter.extend({
  firebase: new window.Firebase('https://' + ENV.firebase_instance + '.firebaseio.com')
});