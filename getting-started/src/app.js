/* global algoliasearch instantsearch */

const searchClient = algoliasearch('M6QROU52AN', 'b6180cf7372c56502f410c7bc01ec9f7');

const search = instantsearch({
  indexName: 'dev_movie',
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
<article>
  <h1>{{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}</h1>
  <p>{{#helpers.highlight}}{ "attribute": "id" }{{/helpers.highlight}}</p>
  <p>{{#helpers.highlight}}{ "attribute": "genre" }{{/helpers.highlight}}</p>
  <p>{{#helpers.highlight}}{ "attribute": "priceRent" }{{/helpers.highlight}}</p>
  <p>{{#helpers.highlight}}{ "attribute": "priceBuy" }{{/helpers.highlight}}</p>
</article>
`,
    },
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();
