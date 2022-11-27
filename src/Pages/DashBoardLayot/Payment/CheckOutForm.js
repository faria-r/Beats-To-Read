import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";

const CheckOutForm = ({ orderData }) => {
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  console.log(clientSecret);
  const stripe = useStripe();
  const elements = useElements();
  const { price, customerName, email, _id ,bookName} = orderData;
  const Swal = require("sweetalert2");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("access-token")} `,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        console.log(data.clientSecret);
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setCardError("");
    }
    setSuccess("");
    setIsLoading(true);
    //confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: customerName,
            email: email,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      
      //save payment information

      const payment = {
price,
email,
transactionId:paymentIntent.id,
customerName,
productName:bookName,
orderId:_id
      };
      fetch("http://localhost:5000/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("access-token")}`,
        },
        body:JSON.stringify(payment)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
            console.log(data)
            setSuccess("Congratulation!");
            setTransactionId(paymentIntent.id);
            Swal.fire("Congrats!", "Your Payment is complete!", "success");
        }
      })
    }
    setIsLoading(false);
    console.log("PAymentIntent", paymentIntent);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm bg-green-500 mt-6 border-none"
          type="submit"
          disabled={!stripe || !clientSecret || isLoading}
        >
          Pay
        </button>
      </form>
      {cardError && (
        <p className="text-red-600 mt-4 text-xl font-semibold">
          Error: {cardError}
        </p>
      )}
      {success && (
        <div>
          <p className="text-green-600">{success}</p>
          <p className="text-green-600">
            Your Transaction Id:{" "}
            <span className=" font-bold ">{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckOutForm;
