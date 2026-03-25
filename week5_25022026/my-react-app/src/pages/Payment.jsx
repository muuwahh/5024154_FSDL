import { useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";

function Payment() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const cardRef = useRef();

  const total = state.event.price * state.tickets;

  const handlePay = () => {
    navigate("/success", { state: { ...state, total } });
  };

  return (
    <div>
      <h2>Payment 💳</h2>
      <p>Total: ₹{total}</p>

      <input ref={cardRef} placeholder="Card Number" />

      <button onClick={handlePay}>Pay</button>
    </div>
  );
}

export default Payment;