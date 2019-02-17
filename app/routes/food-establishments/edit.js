import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model(params) {
    return this.store.find('food-establishment', params.id );
  },
  actions: {
    cancel(changeset, model) {
      changeset.rollback();
      this.transitionTo("food-establishments.show", model);
    },
    save(changeset, model) {
      var self = this;
      // TODO changeset gets applied even when server gives 500
      changeset.save().then( function() {
        self.transitionTo("food-establishments.show", model);
      }).catch( function() {
        alert("Could not save food-establishment");
      });
    },
    delete(changeset, model) {
      var self = this;
      model.deleteRecord();
      return model.save().then( function() {
        self.transitionTo( "food-establishments");
      }).catch( function() {
        alert("Deletion of food-establishment failed");
      });
    }
  }
});
