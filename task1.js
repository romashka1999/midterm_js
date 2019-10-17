function Library() {
    let authors = [];
    let books = [];

    return{
        addAurthor,
        addBook,
        searchBook,
        printLibrary,
        clearLibrary,
    }

    function addAurthor(fullName){
        if( typeof fullName === 'string'){
            //when already exists author in authors array
            for(author of authors){
                if(author === fullName){
                    return false;
                }
            }
            authors.push(fullName)
        } else {
            return false;
        }
    }

    function addBook(authorFullname, bookObject){
        if(typeof bookObject === 'object' && typeof authorFullname === 'string'){
            if( bookObject.title && bookObject.price && bookObject.numberOfPages){
                this.addAurthor(authorFullname);
                bookObject.author = authorFullname;
                books.push(bookObject);
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    function searchBook(bookTitle){
        for(book of books){
            if( book.title === bookTitle){
                return book;
            }
        }
        return false;
    }

    function printLibrary(){
        for(author of authors){
            let cntBooks = 1;
            console.log(author)
            console.log('--------------------------------')
            for(book of books){
                if(book.author === author){
                    console.log('წიგნი'+cntBooks + '-' + book.price + '-' + book.numberOfPages);
                    cntBooks +=1;
                }
            }
            console.log('======================================');
        }
    }

    function clearLibrary(){
        authors = [];
        books = [];
        return true;
    }
}

/******************************  Driver Code ***************************************/

let lib = Library();


lib.addBook('author1',{
    title:'title1',
    price:23,
    numberOfPages:12
})

lib.addBook('author1',{
    title:'title2',
    price:234,
    numberOfPages:121
})

lib.addBook('author2',{
    title:'title3',
    price:23234,
    numberOfPages:126213
})


lib.printLibrary();

console.log(lib.searchBook('title1'));

