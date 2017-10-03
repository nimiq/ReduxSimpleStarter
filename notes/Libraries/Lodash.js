// LODASH is a multi-purpose JS library (like a lighter jQuery).
import _ from 'lodash';


/* OBJECTS *********************************************************************
*******************************************************************************/

// MAP()
// Same as map() over an array (in vanilla JS).
const books = {
  1: {title: 'Gomorra'},
  2: {title: 'Harry Potter'},
}
_.map(books, book => book.title)  // ["Gomorra", "Harry Potter"]


// OMIT: remove an attribute from an object.
const books = {
  1: {title: 'Gomorra'},
  2: {title: 'Harry Potter'},
}
_.omit(books, 1);  /* {
                        "2": {"id":2,"title":"Harry Potter"}
                      } */


// KEYS in obj
_.keys({name: "john", last:"doe"});  // ["name", "last"]


/* ARRAYS **********************************************************************
*******************************************************************************/

// ARRAY OF OBJECTS > OBJECT OF OBJECTS
const books = [
  {id: 1, title: 'Gomorra'},
  {id: 2, title: 'Harry Potter'},
]
_.mapKeys(books, 'id'); /* {
                             "1": {"id":1,"title":"Gomorra"},
                             "2": {"id":2,"title":"Harry Potter"}
                           } */


// REJECT: remove an item from an array.
const books = [
  {id: 1, title: 'Gomorra'},
  {id: 2, title: 'Harry Potter'},
]
_.reject(books, post => post.id === 1);  // [{id: 2, title: 'Harry Potter'}]


// EACH
const books = [
  {id: 1, title: 'Gomorra'},
  {id: 2, title: 'Harry Potter'},
]
_.each(books, ({id, title}) => console.log(id));  /* 1
                                                     2 */

// FILTER
const books = [
  {id: 1, title: 'Gomorra'},
  {id: 2, title: 'Harry Potter'},
]
_.filter(books, ({id, title}) => id===1);  // [{id: 1, title: 'Gomorra'},]


// INCLUDES (former CONTAINS)
_.includes([1, 2, 3], 1);  // true.



/* OTHER ***********************************************************************
*******************************************************************************/

// MATH
_.round(_.sum(data)/data.length)


// THROTTLE (debounce)
// Throttling a function (debounce): eg. instant search that happens on
// every key press, but non more freq than 500 ms.
_.debounce((term) => {this.videoSearch(term)}, 1000);  // 1 time per sec max (no more frequently).
