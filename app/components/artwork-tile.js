import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  updateArtworkForm: false,
  actions: {
    imageShow() {
      this.set('isImageShowing', true);
    },
    imageHide() {
      this.set('isImageShowing', false);
    },
    update(artwork, params) {
      this.sendAction('update', artwork, params);
    },
    delete(artwork) {
      if (confirm('Are you sure you want to delete this artwork entry?')) {
        this.sendAction('destroyArtwork', artwork);
      }
    }
  }
});
