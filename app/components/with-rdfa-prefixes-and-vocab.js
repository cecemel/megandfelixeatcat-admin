import { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  tagName: 'div',
  attributeBindings: ["vocab", "prefixes"],
  vocab: computed( function() {
    const vocab=""; // generated
    return vocab != "" && vocab;
  }),
  prefixes: computed( function() {
    const prefixes = "dbpedia:http://dbpedia.org/ontology/ dct:http://purl.org/dc/terms/ nie:http://www.semanticdesktop.org/ontologies/2007/01/19/nie# nfo:http://www.semanticdesktop.org/ontologies/2007/03/22/nfo# schema:http://schema.org/ meg:http://megandfelixeat.cat/ ext:http://mu.semte.ch/vocabularies/ext/ rm:http://mu.semte.ch/vocabularies/logical-delete/ typedLiterals:http://mu.semte.ch/vocabularies/typed-literals/ mu:http://mu.semte.ch/vocabularies/core/ xsd:http://www.w3.org/2001/XMLSchema# app:http://mu.semte.ch/app/ owl:http://www.w3.org/2002/07/owl# rdf:http://www.w3.org/1999/02/22-rdf-syntax-ns#"; // generated
    return prefixes != "" && prefixes;
  })
});
