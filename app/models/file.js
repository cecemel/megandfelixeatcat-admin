import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'filename', 'format', 'size', 'extension', 'created']),

  uri: attr(),
  filename: attr(),
  format: attr(),
  size: attr(),
  extension: attr(),
  created: attr('datetime'),
  download: belongsTo('file', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "nfo:FileDataObject",
    filename: "nfo:fileName",
    format: "dct:format",
    size: "nfo:fileSize",
    extension: "dbpedia:fileExtension",
    created: "nfo:fileCreated"
  })
});
