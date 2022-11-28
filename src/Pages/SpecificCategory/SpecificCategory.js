import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";
import Books from "./Books/Books";

const SpecificCategory = () => {
  const books = useLoaderData();
  const [availableBook, setAvailableBook] = useState(books);
  const navigation = useNavigation();
  if(navigation.state === 'loading'){
    return <progress className="progress w-56"></progress>
  }
  return (
    <div className="bg-base-200">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-3/4 mx-auto my-8">
      {books.map((book) => (
        <Books key={book._id} book={book} books={books}   availableBook={availableBook}
        setAvailableBook={setAvailableBook}></Books>
      ))}
    </div>
    <div>
        {availableBook && books && books.map ( book => 
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
