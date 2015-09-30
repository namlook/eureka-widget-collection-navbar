import Ember from 'ember';
import CollectionActionableItem from 'eureka-mixin-actionable-widget/mixins/collection-actionable-item';

export default Ember.Component.extend(CollectionActionableItem, {
    tagName: 'li',
    classNames: ['presentation'],

    classNameBindings: ["isActive:active"],

    isActive: Ember.computed('currentRouteName', 'route', function() {
        return this.get('currentRouteName') === this.get('route');
    })
});
