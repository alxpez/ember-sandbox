import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      category: 'Felinos',
      animals: [
        {name: 'gatito lindo', description: 'El rey de la casa'},
        {name: 'pantera', description: 'El rey de la jungla'},
        {name: 'leon', description: 'El rey leon'},
        {name: 'tigre', description: 'El rey de la otra casa'},
      ]
    }
  }
});
