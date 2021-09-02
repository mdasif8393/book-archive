// Handle search value
const handleSearch = () => {

  const bookName = document.getElementById('search-input').value;

  document.getElementById('search-input').value = '';

  searchBooks(bookName);
}

//Handle APi book search
const searchBooks = (bookName) => {

    fetch(`https://openlibrary.org/search.json?q=${bookName}`)
    .then( res => res.json() )
    .then( data => showBooks(data) )

    .catch(error => handleError(error));
}

//Handle Books and show books
const showBooks = (books) => {

  document.getElementById('total-result').innerText = `Total ${books.numFound} search results found`; //Total books result count

  const booksContainer = document.getElementById('books-container');

    booksContainer.innerText = ''; //empty previous search result

    books.docs.forEach(book => {
      console.log(book);
        const booksContainer = document.getElementById("books-container");

        const bookDiv = document.createElement("div");

        bookDiv.innerHTML = 
        `
        <div class="card card-style" style="width: 18rem;">
          <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Book Name: <span class="text-secondary">${book.title}</span></h5>
            <h6>Author: <span class="text-secondary">${book.author_name[0]}</span></h6>
            <h6>First Publish: <span class="text-secondary">${book.first_publish_year}</span></h6>
            <h6>Language: <span class="text-secondary">${book.language}</span></h6>            
          </div>
        </div>
        `
        booksContainer.appendChild(bookDiv);
    } )
    
}

const handleError = (error) => { //Handle api error
  document.getElementById('error-message').innerText = 
  `
  ${error}
  `
  ;
}

