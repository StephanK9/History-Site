import DS from 'ember-data';

export default DS.Model.extend({
  artist: DS.attr(),
  title: DS.attr(),
  location: DS.attr(),
  type: DS.attr(),
  date: DS.attr(),
  image: DS.attr()
});
