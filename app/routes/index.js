import Ember from 'ember';


export default Ember.Route.extend({
  model() {
    return this.store.findAll('artwork');
  },

  actions: {
    saveArtwork3(params) {
      var newArtwork = this.store.createRecord('artwork', params);
      newArtwork.save();
      this.transitionTo('index');
    },

    destroyArtwork(artwork) {
      artwork.destroyRecord();
      this.transitionTo('index');
    }
  }
});
