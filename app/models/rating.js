import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'ratingValue', 'veggieScore', 'priceQuality', 'created']),

  uri: attr(),
  ratingValue: attr(),
  veggieScore: attr(),
  priceQuality: attr(),
  created: attr('date'),
  review: belongsTo('review', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "schema:Rating",
    ratingValue: "schema:ratingValue",
    veggieScore: "meg:veggieScore",
    priceQuality: "meg:priceQuality",
    created: "dct:created"
  })
});
