edi ember install ember-power-select;
edi ember install ember-changesetl
edi ember install ember-datetimepicker;
edi ember install https://github.com/mu-semtech/ember-mu-application-generator.git#oslo2;
edi ember generate ember-mu-application-generator;
edi ember install ember-data-table;
edi ember install ember-cli-sass;
edi ember generate mu-application-design;
edi ember g mu-resource "food-establishment&schema:FoodEstablishment" "establishment-name:string&schema:name" "ratings:has-many:rating&schema:starRating" "reviews:has-many:review&schema:review"
edi ember g mu-resource "rating&schema:Rating" "rating-value:number&schema:ratingValue" "veggie-score:number&meg:veggieScore" "price-quality:number&meg:priceQuality" "created:date&dct:created" "review:belongs-to:review~rating"
edi ember g mu-resource "reviewer&schema:Person" "family-name:string&schema:familyName" "firstname:string&schema:name"
edi ember g mu-resource "review&schema:Review" "review-body:string&schema:reviewBody" "headline:string&meg:reviewHeadline" "created:date&dct:created" "rating:belongs-to:rating~review&schema:reviewRating" "food-establishment:belongs-to:food-establishment&schema:itemReviewed" "authors:has-many:reviewer&schema:author"
edi ember generate rdfa-prefixes "http://schema.org/" "dct:http://purl.org/dc/terms/" "schema:http://schema.org/" "meg:http://megandfelixeat.cat/" "ext:http://mu.semte.ch/vocabularies/ext/" "rm:http://mu.semte.ch/vocabularies/logical-delete/" "typedLiterals:http://mu.semte.ch/vocabularies/typed-literals/" "mu:http://mu.semte.ch/vocabularies/core/" "xsd:http://www.w3.org/2001/XMLSchema#" "app:http://mu.semte.ch/app/" "owl:http://www.w3.org/2002/07/owl#" "rdf:http://www.w3.org/1999/02/22-rdf-syntax-ns#"
