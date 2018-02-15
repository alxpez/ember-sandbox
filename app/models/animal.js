import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  city: DS.attr(),
  category: DS.attr(),
  image: DS.attr(),
  year: DS.attr(),
  description: DS.attr()
});
