import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('route-not-found', {
    path: '/*wildcard'
  });

  this.route('food-establishments', {
    path: '/doc/food-establishments/'
  }, function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });

  this.route('ratings', {
    path: '/doc/ratings/'
  }, function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });

  this.route('reviewers', {
    path: '/doc/reviewers/'
  }, function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });

  this.route('reviews', {
    path: '/doc/reviews/'
  }, function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
});

export default Router;
