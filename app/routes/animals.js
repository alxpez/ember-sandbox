import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      id: '1',
      title: 'Pigs on the wind 1',
      author: 'Roger Waters',
      year: '1977',
      city: 'Berlin',
      category: 'light',
      image: 'http://trekbikes.typepad.com/.a/6a00d83453a62f69e2016306582522970d-500wi',
      description: '"Pigs on the Wing" is a two-part song by progressive rock band Pink Floyd from their 1977 concept album Animals, opening and closing the album.[1] According to various interviews, it was written by Roger Waters as a declaration of love to his new wife Carolyne Christie. This song is significantly different from the other three songs on the album, "Dogs", "Pigs", and "Sheep" in that the other songs are dark, whereas this one is lighter-themed, as well as also being much shorter in duration at under a minute and a half while the others are over 10 minutes in length'
    }, {
      id: '2',
      title: 'Dogs',
      author: 'Roger Waters, David Gilmour',
      year: '1977',
      city: 'Lisbon',
      category: 'dark',
      bedrooms: 1,
      image: 'https://spectrum.ieee.org/image/Mjk5OTAyNQ.jpeg',
      description: "Dogs' (originally composed as 'You've Got to Be Crazy') is a song by English progressive rock band Pink Floyd, released on the album Animals in 1977. This song was one of several to be considered for the band's 'best of' album Echoes: The Best of Pink Floyd."
    }, {
      id: '3',
      title: 'Pigs (three different ones)',
      author: 'Roger Waters',
      year: '1977',
      city: 'London',
      category: 'sad',
      image: 'https://www.thesun.co.uk/wp-content/uploads/2017/06/nintchdbpict000332425829.jpg',
      description: "'Pigs (Three Different Ones)' is a song from Pink Floyd's 1977 album Animals. In the album's three parts, 'Dogs', 'Pigs' and 'Sheep', pigs represent the people whom Roger Waters considers to be at the top of the social ladder, the ones with wealth and power; they also manipulate the rest of society and encourage them to be viciously competitive and cutthroat, so the pigs can remain powerful. Although it was not made available for commercial purchase, promotional copies were released in Brazil, albeit in an edited form of only four minutes and five seconds in length."
    }, {
      id: '4',
      title: 'Sheeps',
      author: 'Roger Waters',
      year: '1977',
      city: 'Wellington',
      category: 'sad',
      image: 'http://disinfectionmat.com/wp-content/uploads/2015/07/Sheepmat-Sweetman-Disinfection-Mat-2.jpg',
      description: "'Sheep' is a song by English band Pink Floyd, released on the album Animals in 1977. In 1974, it was originally titled 'Raving and Drooling'. It was written by bassist Roger Waters."
    }, {
      id: '5',
      title: 'Pigs on the wind 2',
      author: 'Roger Waters',
      year: '1977',
      city: 'Sydney',
      category: 'happy',
      image: 'https://timedotcom.files.wordpress.com/2017/08/pigs.jpg',
      description: '"Pigs on the Wing" is a two-part song by progressive rock band Pink Floyd from their 1977 concept album Animals, opening and closing the album.[1] According to various interviews, it was written by Roger Waters as a declaration of love to his new wife Carolyne Christie. This song is significantly different from the other three songs on the album, "Dogs", "Pigs", and "Sheep" in that the other songs are dark, whereas this one is lighter-themed, as well as also being much shorter in duration at under a minute and a half while the others are over 10 minutes in length'
    }]
  }
});
