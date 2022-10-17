import { ICard } from '../interfaces/interfases';

const generateId = () => {
  return Date.now().toString() + Math.random().toString();
};

const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max);
};

export const cards: ICard[] = [
  {
    id: generateId(),
    name: 'Karachaevsk',
    url: 'images/one.jpg',
    counter: 0,
    liked: true,
  },
  {
    id: generateId(),
    name: 'Elbrus',
    url: 'images/two.jpg',
    counter: getRandomInt(10),
    liked: Math.random() < 0.5,
  },
  {
    id: generateId(),
    name: 'Dombai',
    url: 'images/three.png',
    counter: getRandomInt(10),
    liked: Math.random() < 0.5,
  },
  {
    id: generateId(),
    name: 'Elbrus',
    url: 'images/four.png',
    counter: getRandomInt(10),
    liked: Math.random() < 0.5,
  },
  {
    id: generateId(),
    name: 'Dombai',
    url: 'images/five.jpg',
    counter: getRandomInt(10),
    liked: Math.random() < 0.5,
  },
  {
    id: generateId(),
    name: 'Karachaevo-Cherkesk',
    url: 'images/six.png',
    counter: getRandomInt(10),
    liked: Math.random() < 0.5,
  },
];
