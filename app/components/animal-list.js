import Component from '@ember/component';

export default Component.extend({
  actions: {
    showDetails (animal) {
      alert(animal.description)
    }
  }
});
