import React from "react";
import { useLoaderData } from "react-router-dom";
import Books from "./Books/Books";

const SpecificCategory = () => {
  const books = useLoaderData();
  console.log(books);
  return (
    <div className="grid grid-cols-1 gap-2 w-3/4 mx-auto">
      {books.map((book) => (
        <Books key={book._id} book={book} books={books}></Books>
      ))}
    </div>
  );
};

export default SpecificCategory;
