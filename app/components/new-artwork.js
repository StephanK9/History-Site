import Ember from 'ember';

export default Ember.Component.extend({
  addNewArtwork: false,
  actions: {
    artworkFormShow() {
      this.set('addNewArtwork', true);
    },

    saveArtwork1() {
      var params = {
        artist: this.get('artist'),
        title: this.get('title'),
        location: this.get('location'),
        type: this.get('type'),
        date: this.get('date'),
        image: this.get('image'),
      };
      this.set('addNewArtwork', false);
      this.sendAction('saveArtwork2', params);
    }
  }
});
