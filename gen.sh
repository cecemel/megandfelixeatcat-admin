# edi ember install ember-power-select;
# edi ember install ember-changesetl
# edi ember install ember-datetimepicker;
# edi ember install https://github.com/mu-semtech/ember-mu-application-generator.git#oslo2;
# edi ember generate ember-mu-application-generator;
# edi ember install ember-data-table;
# edi ember install ember-cli-sass;
# edi ember generate mu-application-design;
edi ember g mu-resource "postal-address&schema:PostalAddress" "country:string&schema:addressCountry" "region:string&schema:addressRegion" "postal-code:string&schema:postalCode"
edi ember g mu-resource "food-establishment&schema:FoodEstablishment" "establishment-name:string&schema:name" "website:string&schema:url" "aggregate-rating:belongs-to:aggregate-rating" "address:belongs-to:postal-address&schema:postalAddress" "ratings:has-many:rating~food-establishment&schema:starRating" "reviews:has-many:review~food-establishment" "photos:has-many:file&schema:photo"
edi ember g mu-resource "rating&schema:Rating" "rating-value:number&schema:ratingValue" "veggie-score:number&meg:veggieScore" "created:date&dct:created" "review:belongs-to:review~rating" "food-establishment:belongs-to:food-establishment~ratings"
edi ember g mu-resource "aggregate-rating&schema:AggregateRating" "rating-value:number&schema:ratingValue" "avg-veggie-score:number&meg:avgVeggieScore" "count:number&schema:ratingCount" "food-establishment:belongs-to:food-establishment~aggregate-rating&schema:itemReviewed"
edi ember g mu-resource "reviewer&schema:Person" "family-name:string&schema:familyName" "firstname:string&schema:name"
edi ember g mu-resource "review&schema:Review" "review-body:string&schema:reviewBody" "headline:string&meg:reviewHeadline" "created:date&dct:created" "rating:belongs-to:rating~review&schema:reviewRating" "food-establishment:belongs-to:food-establishment~aggregate-rating&schema:itemReviewed" "authors:has-many:reviewer&schema:author"
edi ember g mu-resource "file&nfo:FileDataObject" "filename:string&nfo:fileName" "format:string&dct:format" "size:number&nfo:fileSize" "extension:string&dbpedia:fileExtension" "created:datetime&nfo:fileCreated" "download:belongs-to:file"
edi ember generate rdfa-prefixes "http://schema.org/" "dbpedia:http://dbpedia.org/ontology/" "dct:http://purl.org/dc/terms/" "nie:http://www.semanticdesktop.org/ontologies/2007/01/19/nie#" "nfo:http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#" "schema:http://schema.org/" "meg:http://megandfelixeat.cat/" "ext:http://mu.semte.ch/vocabularies/ext/" "rm:http://mu.semte.ch/vocabularies/logical-delete/" "typedLiterals:http://mu.semte.ch/vocabularies/typed-literals/" "mu:http://mu.semte.ch/vocabularies/core/" "xsd:http://www.w3.org/2001/XMLSchema#" "app:http://mu.semte.ch/app/" "owl:http://www.w3.org/2002/07/owl#" "rdf:http://www.w3.org/1999/02/22-rdf-syntax-ns#"
