export function selectBook(book) {
    // Return an action.
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}
