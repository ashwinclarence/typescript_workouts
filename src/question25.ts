var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    },
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        readingStatus: false
    },
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        readingStatus: true
    }
];



function readBooks(books: {title:string,author:string,readingStatus:boolean}[]) {
    for (const book of books) {
        if (book.readingStatus) {
            console.log(`Already read '${book.title}' by ${book.author}.`);
        } else {
            console.log(`You still need to read '${book.title}' by ${book.author}.`);
        }
    }
}

readBooks(library);