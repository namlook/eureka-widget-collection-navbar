import WidgetCollection from 'ember-eureka/widget-collection';
import ActionableMixin from 'eureka-mixin-actionable-widget';

export default WidgetCollection.extend(ActionableMixin, {

    labelRoute: function() {
        var route = this.get('config.labelRoute');
        if (!route && route !== false) {
            route = this.get('modelMeta.indexViewPath');
        }
        return route;
    }.property('config.labelRoute', 'modelMeta'),

    label: function() {
        var _label = this.get('config.label');
        if (_label === undefined) {
            _label = 'auto';
        }
        if (_label === 'auto') {
            _label = this.get('resource');
        }
        return _label;
    }.property('config.label', 'resource')

});