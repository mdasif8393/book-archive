//Handle APi book search
const handleApi = () => {
    const bookName = document.getElementById("search-input").value;

    fetch(`http://openlibrary.org/search.json?q=${bookName}`)
    .then( res => res.json() )
    .then( data => showBooks(data.docs) )
}

//Handle Books and show books

const showBooks = (books) => {

    books.forEach(book => {
        console.log(book.author_name[0]);
        const booksContainer = document.getElementById("books-container");

        const bookDiv = document.createElement("div");

        bookDiv.innerHTML = 
        `
        <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title text-primary">Book Name: ${book.title}</h5>
    <h6>Author: ${book.author_name[0]}</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        `

        booksContainer.appendChild(bookDiv);
    } )
}