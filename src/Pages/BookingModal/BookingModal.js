import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";

const BookingModal = ({ book, availableBook, setAvailableBook }) => {
  const { user } = useContext(AuthContext);
  const { name, resalePrice, image } = book;
  const Swal = require("sweetalert2");
  console.log(availableBook,'availableBook')
  const handleSubmit = (event) => {

    event.preventDefault();
    const Cname = event.target.name.value;
    const email = event.target.email.value;
    const bookName = event.target.bookName.value;
    const price = event.target.price.value;
    const phone = event.target.phone.value;
    const location = event.target.location.value;
    console.log(name, phone, email, bookName, price, location);

    const orderData = {
      customerName: Cname,
      email,
      bookName,
      price,
      phone,
      location,
      image
    };

    fetch("https://assignment-twelve-server-psi.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire("Congrats!", "Your Order is Booked!", "success");
          setAvailableBook(null);
        }
      });
  };
  return (
    <div>
      <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal" id="my-modal-3">
        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle  absolute lg:left-[790px] sm: right-[100px] top-12 z-10">✕</label>
          <form onSubmit={handleSubmit}>
            <div className="modal-box">
              <h2 className="text-xl text-green-600 text-center mt-6">
                Give Your Information and Book Now!
              </h2>
              <div className="w-[300px]  mx-auto">
                <div className="form-control my-2 w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    name="name"
                    defaultValue={user?.displayName}
                    readOnly
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="form-control my-2 w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Type here"
                    defaultValue={user?.email}
                    readOnly
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="form-control my-2 w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Book Name</span>
                  </label>
                  <input
                    type="text"
                    name="bookName"
                    placeholder="Type here"
                    value={availableBook.name}
                    readOnly
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="form-control my-2 w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    name="price"
                    placeholder="Type here"
                    defaultValue={availableBook.resalePrice}
                    readOnly
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="form-control my-2 w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="form-control my-2 w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Meet Location</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
              </div>

              <div className="modal-action">
                <a href="#" className="btn">
                  Cancel
                </a>
                <button href="#" className="btn btn-submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
