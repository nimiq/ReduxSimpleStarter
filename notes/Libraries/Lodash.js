//
import _ from 'lodash';


// MATH
_.round(_.sum(data)/data.length)


// MAP() OVER AN OBJECT
// Same as map() over an array (in vanilla JS).
const books = {
  1: {title: 'Gomorra'},
  2: {title: 'Harry Potter'},
}
_.map(books, book => book.title)  // ["Gomorra", "Harry Potter"]


// ARRAY OF OBJECTS > OBJECT OF OBJECTS
const books = [
  {id: 1, title: 'Gomorra'},
  {id: 2, title: 'Harry Potter'},
]
_.mapKeys(books, 'id'); /* {
                             "1": {"id":1,"title":"Gomorra"},
                             "2": {"id":2,"title":"Harry Potter"}
                           } */


// REMOVE FROM AN OBJECT / ARRAY
// OMIT from obj: remove an attribute from an obj.
const books = {
  1: {title: 'Gomorra'},
  2: {title: 'Harry Potter'},
}
_.omit(books, 1);  /* {
                        "2": {"id":2,"title":"Harry Potter"}
                      } */
// REJECT from array: remove an item from an array.
const books = [
  {id: 1, title: 'Gomorra'},
  {id: 2, title: 'Harry Potter'},
]
_.reject(books, post => post.id === 1);  // [{id: 2, title: 'Harry Potter'}]


// THROTTLE (debounce)
// Throttling a function (debounce): eg. instant search that happens on
// every key press, but non more freq than 500 ms.
_.debounce((term) => {this.videoSearch(term)}, 1000);  // 1 time per sec max (no more frequently).
