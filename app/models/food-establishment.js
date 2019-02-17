import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'establishmentName']),

  uri: attr(),
  establishmentName: attr(),
  ratings: hasMany('rating', { inverse: null }),
  reviews: hasMany('review', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "schema:FoodEstablishment",
    establishmentName: "schema:name",
    ratings: "schema:starRating",
    reviews: "schema:review"
  })
});
