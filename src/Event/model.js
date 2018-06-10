import { List, Record, fromJS } from 'immutable';
import Image from '../Image/model';
import Person from '../Person/model';

const Parent = Record({
  ageRestrictions: null,
  author: new Person(),
  characters: List(),
  description: null, // can include html, images. Must be like html container
  duration: 0, // minutes
  genre: null,
  hall: 'big', // big | small (anything else?). Enum type
  language: 'ru', // ru | en | by (anything else?)
  poster: new Image(),
  price: 0, // BYN
  start: new Date(),
  title: '',
});

/** Class representing an event */
export default class Event extends Parent {
  /**
   * Create an event
   *
   * @param {Object} event - New event
   * @param {?number} event.ageRestrictions - People younger than this age
   * can't buy tickets for this event
   * @param {string} event.author - An author, director of show
   * @param {string[]} event.characters - People names who play roles in event
   * @param {string} event.description - About event. Can include html, images
   * @param {!number} event.duration - How long an event will take
   * @param {?string} event.genre
   * @param {string} event.hall - In what hall event will occurs
   * @param {string} event.language
   * @param {string} event.poster - A path to cover of event
   * @param {?(number[])} event.price. Several prices while no online ticket sale
   * @param {Date} event.start - when event will start
   * @param {!string} event.title - Title of event
   */
  constructor(event) {
    // @TODO convert date to human friendly format
    const poster = new Image(event.poster);
    const characters = List(event.characters.map(character => new Person(character)),);
    const author = new Person(event.author);

    const immutableEvent = fromJS(Object.assign({}, event, {
        poster,
        characters,
        author,
      }),);
    super(immutableEvent);
  }
}