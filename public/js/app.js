$(document).ready(function() {

    var Item = Backbone.Model.extend({
        urlRoot: '/item',
        parse: function(res, options) {
            return res.result.item;
        }
    });

    var ItemEnumerables = Backbone.Model.extend({
        defaults: {
            itemEnums: {
              material: ['Wood', 'Metal', 'Ceramic', 'Glass', 'Leather'],

              measurement: {
                  unit: {
                      'in': 'inches',
                      'cm': 'centimeters'
                  },
                  shape: ['Rectangular', 'Circular']
              },

              condition: {
                  description: ['Distressed', 'Fair', 'Good', 'Excellent']
              }
            }
        }
    });

    var ItemFormView = Backbone.View.extend({
      className: 'itemForm',

      template: _.template(Templates.itemForm),

      events: {

      },

      initialize: function(options) {
        this.listenTo(this.model, 'change', this.render);
        this.model.fetch();
        this.enumerables = new ItemEnumerables();
      },

      render: function() {
        var data = _.extend(_.clone(this.model.toJSON()), this.enumerables.toJSON());
        console.log(data);
        this.$el.html(this.template(data)).appendTo('.fn-form-container');
        return this;
      }
    });

    var itemForm = new ItemFormView({
      model: new Item()
    });
});
