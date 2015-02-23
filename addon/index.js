// import Ember from 'ember';
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
    }.property('config.label', 'modelType')

});