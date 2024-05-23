// let library = [];

// // function to add book
// function addBook(){
//     let bookId = parseInt(prompt("enter book ID in number" , 0 )) ;
//     let bookTitle = prompt("enter book title", "title");
//     let bookAuthor = prompt ("enter book author", "author");
//     let bookPages = parseInt(prompt("enter amount of pages in book"));
//     let bookYearOfPulication = parseInt(prompt("enter year book was published");)
//     let bookInfo = { bookId: bookId, bookTitle: bookTitle, bookAuthor:bookAuthor, bookPages: bookPages, bookYearOfPulication: bookYearOfPulication};
//     library.push(bookInfo);
//     console.log(library);
// }

// // function to update book
// function updateBook(){
//     let bookId =parseInt( prompt("enter book ID (in number) to be updated" , 0 ) );
//     let validId=false;

//       for (let i = 0; i < library.length; i++) {
//         if (library[i].bookId === bookId) {
//             validId= true;
//             let bookTitle = prompt("Enter updated book title");
//             let bookAuthor = prompt("Enter updated book author");
//             let bookPages = prompt("Enter updated amount of pages in book");
//             let bookYearOfPublication = prompt("Enter updated year book was published");

//             library[i].bookTitle = bookTitle;
//             library[i].bookAuthor = bookAuthor;
//             library[i].bookPages = bookPages;
//             library[i].bookYearOfPublication = bookYearOfPublication;

//             console.log("Book updated successfully");
//             return;
//         }
//      }
//       console.log("Invalid ID! Book not found");
// }    
    
// // function to delete book
// function deleteBook() {
//     let bookId = parseInt(prompt("Enter book id (in number) to be deleted", 0));

//     for (let i = 0; i < library.length; i++) {
//         if (library[i].bookId === bookId) {
//             library.splice(i, 1);
//             console.log("Book deleted successfully!");
//             console.log(library);
//             return; 
//         }
//     }
//     console.log("Book not found. Please enter a valid book ID.");
// }


// // function to display books
// // function displayBooks() {
// //     console.log("Books available in the library are:");
// //     for (let index in library) {
// //         console.log(library[index]);
// //     }
// // }
// function displayBooks() {
//     console.log("Books available in the library are:" + library);
// }



// // Users Choice
// let choice = prompt("Choose an action: 1 - Add book, 2 - Update book, 3 - Delete a book, 4 - Display books available");
// switch (choice){
//     case "1": addBook();
//     break;
//     case "2": updateBook();
//     break;
//     case "3": deleteBook();
//     break;
//     case "4": displayBooks();
//     break;
//     default:
//         console.log(" Error,invalid choice!");
// }

let library = [];

// function to add books
function addBooks(bookId,bookTitle, bookAuthor, bookPages,bookYearOfPublication){
    const existingBook = library.find(book=> book.bookId=== bookId);
    if(existingBook){
        console.error("book ID already exists!");
        return;
    }
    const newBook = {
        bookId : bookId,
        bookTitle: bookTitle,
        bookAuthor: bookAuthor,
        bookPages: bookPages,
        bookYearOfPublication: bookYearOfPublication
    };
    library.push(newBook);
    console.log("Book is added successfully!");
}

// function for book update 
function updateBook(bookId, bookTitle, bookAuthor, bookPages, bookYearOfPublication){
    for (let i = 0; i < library.length; i++) {
             if (library[i].bookId === bookId) {
                     library[i].bookTitle = bookTitle;
                     library[i].bookAuthor = bookAuthor;
                     library[i].bookPages = bookPages;
                     library[i].bookYearOfPublication = bookYearOfPublication;
        
                    console.log("Book updated successfully");
                     return;
                 }
   }
               console.log("Invalid ID! Book not found");
}  

// function to delete book
function deleteBook(bookId){
    for(let i = 0; i < library.length ; i++){
        if (library[i].bookId === bookId){
            library.splice(i , 1);
            console.log("book deleted successfully!");
            return;
        }
    }
    console.error("book ID not found!");
}

// function to display book
    function displayBooks() {
        console.log("Books in the library:");
        library.forEach(book => {
            console.log({book});
            
        });
    }

addBooks(1, "first book", "new author", 12, 2021);
addBooks(2, "second book", "second author", 20, 1996 );
displayBooks();