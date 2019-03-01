import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('aggregate-rating');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "aggregate-ratings");
      }).catch( function() {
        alert("Creation of aggregate-rating failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "aggregate-ratings");
      }).catch( function() {
        alert("Cancelling creation of aggregate-rating failed");
      });
    }
  }
});
