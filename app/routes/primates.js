import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      category: 'Primates',
      animals: [
        {name: 'chimpance', description: 'hace tortillas de patata'},
        {name: 'bonobo', description: 'pues eso'},
        {name: 'gorila', description: 'de estos hay muchos por el mundo'},
        {name: 'mandril', description: 'Un loco de la vida'},
      ]
    }
  }
});
