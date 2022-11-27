import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";
import Books from "./Books/Books";

const SpecificCategory = () => {
  const books = useLoaderData();
  const [availableBook, setAvailableBook] = useState(books);
  console.log(books);
  return (
    <div>
      <div className="grid grid-cols-1 gap-2 w-3/4 mx-auto">
      {books.map((book) => (
        <Books key={book._id} book={book} books={books}   availableBook={availableBook}
        setAvailableBook={setAvailableBook}></Books>
      ))}
    </div>
    <div>
        {books && books.map ( book => 
          <BookingModal
            key={book._id}
            book={book}
            availableBook={availableBook}
            setAvailableBook={setAvailableBook}
          ></BookingModal>
        )}
      </div>
    </div>
  );
};

export default SpecificCategory;
