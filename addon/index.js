import Ember from 'ember';
import WidgetCollection from 'ember-eureka/widget-collection';
import ActionableMixin from 'eureka-mixin-actionable-widget';

export default WidgetCollection.extend(ActionableMixin, {

    label: function() {
        var _label = this.get('config.label');
        if (_label === undefined) {
            _label = 'auto';
        }
        if (_label === 'auto') {
            _label = this.get('modelType');
        }
        return _label;
    }.property('config.label', 'modelType'),


    displayCollectionFilter: function() {
        if (this.get('config.collectionFilter') === false){
            return false;
        }
        return true;
    }.property('config.collectionFilter'),

    // get the search queryParams from the controller
    search: Ember.computed.alias('currentController.search'),

    _searchObserver: function() {
        var searchTerm = this.get('search');
        var query;
        if (searchTerm != null) {
            query = {'title[$iregex]': '^'+searchTerm};
        } else {
            query = {};
        }
        this.set('routeModel.query', query);
    }.observes('search').on('init'),

    actions: {
        clear: function() {
            this.set('search', null);
        }
    }
});