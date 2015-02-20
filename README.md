# Eureka-widget-collection-navbar

An actionable navbar for Eureka collection. Usage:

    {
        BlogPost: {
            views: {
                collection: {
                    outlet: {
                        widgets: [
                            {
                                type: "collection-navbar",

                                // the label displayed at the begining of the navbar.
                                // Set to "auto" to diplay the pod type,
                                // setting to null will hide it
                                label: 'auto',

                                // the navbar contains an input to filter the collection
                                // set to false if don't want it
                                collectionFilter: true,

                                // main actions
                                actions: [
                                    {
                                        icon: 'glyphicon glyphicon-plus',
                                        label: 'create',
                                        route: 'eureka.species.empty.new'
                                    }
                                ],

                                secondaryActions: [
                                    {
                                        label: 'extincts',
                                        route: 'eureka.species.collection.extincts'
                                    },
                                    {
                                        label: 'oldies',
                                        route: 'eureka.species.collection.oldies'
                                    },
                                    {divider: true},
                                    {
                                        label: "users",
                                        route: 'eureka.user.collection.index'
                                    },
                                ]
                            }
                        ]
                    }
                }
            }
        }
    }

### Customizing the label

Want more customization power of the label ? Just extend the component
and modify the `label` attribute.


## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
