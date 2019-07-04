import { Lend } from '../models/lend';

export class LendService {
  bookList: Lend[]= [
    {
      name: 'Le bruit et la fureur',
      isOn: false
    },
    {
      name: 'Demande à la poussière ',
      isOn: true
    },
    {
      name: 'À la recherche du temps perdu : Intégrale ',
      isOn: true
    },
    {
      name: 'Voyage au bout de la nuit ',
      isOn: true
    },
    {
      name: 'La Divine Comédie ',
      isOn: true
    },
    {
      name: 'Au coeur des ténèbres ',
      isOn: true
    },
    {
      name: 'Le Quatuor de Los Angeles, tome 2 : Le Grand Nulle Part ',
      isOn: true
    },
  ]

  cdList: Lend[]= [
    {
      name: 'Michael Jackson - Thriller',
      isOn: true
    },
    {
      name: 'AC/DC - Back in Black',
      isOn: true
    },
    {
      name: 'Pink Floyd - The Dark Side of the Moon',
      isOn: false
    },
    {
      name: 'Whitney Houston / Various artists - The Bodyguard',
      isOn: false
    },
    {
      name: 'Meat Loaf - Bat Out of Hell en 1977',
      isOn: false
    }
  ]
  ;


}
