import React, { useState } from 'react';
import SingleBook from './SingleBook';
import booksData from '../data/fantasy.json';

const AllTheBooks = ({ searchText }) => {
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [visibleBooks, setVisibleBooks] = useState(6);

  const handleBookClick = (book) => {
    setSelectedBooks((prevSelectedBooks) => {
      if (prevSelectedBooks.some((selectedBook) => selectedBook.asin === book.asin)) {
        return prevSelectedBooks; // Se il libro è già selezionato, non aggiungerlo di nuovo
      }
      return [...prevSelectedBooks, book];
    });
  };

  const handleRemoveBook = (bookAsin) => {
    setSelectedBooks((prevSelectedBooks) =>
      prevSelectedBooks.filter((book) => book.asin !== bookAsin)
    );
  };

  const showMoreBooks = () => {
    setVisibleBooks(visibleBooks + 6); // Incrementa di 6 invece di 3 per mostrare più libri
  };

  const filteredBooks = booksData.filter((book) => book.title.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <div>
      <h2 className="text-center mb-4">Tutti i libri</h2>
      <div className="row">
        {filteredBooks.slice(0, visibleBooks).map((book) => (
          <div key={book.asin} className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4"> {/* Usa 6 colonne per riga */}
            <SingleBook book={book} handleBookClick={handleBookClick} />
          </div>
        ))}
      </div>
      {filteredBooks.length > visibleBooks && (
        <div className="text-center">
          <button className="btn btn-primary" onClick={showMoreBooks}>Mostra altri libri</button>
        </div>
      )}
      {selectedBooks.length > 0 && (
        <div className="selected-books-section mt-4">
          <h3 className="text-center">Libri selezionati</h3>
          <div className="row">
            {selectedBooks.map((book) => (
              <div key={book.asin} className="col-md-2 col-sm-3 col-4 mb-4"> {/* Usa 6 colonne per riga */}
                <div className="selected-book p-3">
                  <img src={book.img} alt={book.title} className="img-fluid selected-book-image" />
                  <div className="selected-book-details mt-2">
                    <h5>{book.title}</h5>
                    <p><strong>Autore:</strong> {book.author}</p>
                    <p><strong>Prezzo:</strong> ${book.price.toFixed(2)}</p>
                    <p>{book.description}</p>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleRemoveBook(book.asin)}
                    >
                      Rimuovi
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllTheBooks;
