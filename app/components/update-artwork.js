import Ember from 'ember';

export default Ember.Component.extend({
  updateArtworkForm: false,
  actions: {
    updateArtworkForm(){
    this.set('updateArtworkForm', true);
  },
  update(artwork) {
    var params = {
      artist: this.get('artist'),
      title: this.get('title'),
      location: this.get('location'),
      type: this.get('type'),
      date: this.get('date'),
      image: this.get('imdage'),
    };
    this.set('updateArtworkForm', false);
    this.sendAction('update', artwork, params);
    }
  }
});
