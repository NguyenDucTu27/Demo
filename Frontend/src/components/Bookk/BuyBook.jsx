import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "/src/css/Buy.css";

const BuyBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .post("http://localhost:3001/book/buy/" + id)
      .then((res) => {
        if (res.data.success) {
          navigate("/books");
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return <div className="buy-book-message">Successful purchase! </div>;
};

export default BuyBook;
