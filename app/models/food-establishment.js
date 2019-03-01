import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'establishmentName', 'website']),

  uri: attr(),
  establishmentName: attr(),
  website: attr(),
  aggregateRating: belongsTo('aggregate-rating', { inverse: null }),
  address: belongsTo('postal-address', { inverse: null }),
  ratings: hasMany('rating', { inverse: null }),
  reviews: hasMany('review', { inverse: null }),
  photos: hasMany('file', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "schema:FoodEstablishment",
    establishmentName: "schema:name",
    website: "schema:url",
    address: "schema:postalAddress",
    ratings: "schema:starRating",
    photos: "schema:photo"
  })
});
