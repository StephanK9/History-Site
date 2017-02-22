import Ember from 'ember';


export default Ember.Route.extend({
  model() {
    return this.store.findAll('artwork');
  },

  actions: {
    destroyArtwork(artwork) {
      artwork.destroyRecord();
      this.transitionTo('index');
    }
  }
});
