import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'reviewBody', 'headline', 'created']),

  uri: attr(),
  reviewBody: attr(),
  headline: attr(),
  created: attr('date'),
  rating: belongsTo('rating', { inverse: null }),
  foodEstablishment: belongsTo('food-establishment', { inverse: null }),
  authors: hasMany('reviewer', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "schema:Review",
    reviewBody: "schema:reviewBody",
    headline: "meg:reviewHeadline",
    created: "dct:created",
    rating: "schema:reviewRating",
    foodEstablishment: "schema:itemReviewed",
    authors: "schema:author"
  })
});
