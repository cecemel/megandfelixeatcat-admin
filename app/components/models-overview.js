import { computed } from '@ember/object';
import { inject } from '@ember/service';
import { getOwner } from '@ember/application';
import Component from '@ember/component';

export default Component.extend({
  router: inject('router'),

  menus: computed(function() {
    let router = getOwner(this).lookup('router:main');
    let allRoutesList = router.get('currentState.router.recognizer.names');
    let routeKeys = Object.keys(allRoutesList);
    let filteredKeys = routeKeys.filter(function(item) {
      return item.indexOf('.index') >= 0;
    });

    filteredKeys = filteredKeys.map(function(item) {
      return item.split('.index')[0];
    });
    return filteredKeys.uniq().sort();
  })
});
