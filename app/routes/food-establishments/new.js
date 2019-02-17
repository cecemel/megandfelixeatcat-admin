import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('food-establishment');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "food-establishments");
      }).catch( function() {
        alert("Creation of food-establishment failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "food-establishments");
      }).catch( function() {
        alert("Cancelling creation of food-establishment failed");
      });
    }
  }
});
