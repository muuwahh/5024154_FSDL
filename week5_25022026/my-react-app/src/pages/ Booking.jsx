import { useParams, useNavigate } from "react-router-dom";
import { useRef } from "react";

const events = [
  { id: 1, name: "Fake Wedding 💍", price: 499 },
  { id: 2, name: "Strangers Party 🎉", price: 299 },
  { id: 3, name: "Rooftop Dinner 🌃", price: 999 },
];

function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const ticketRef = useRef();

  const event = events.find((e) => e.id === Number(id));

  const handleBooking = () => {
    const tickets = ticketRef.current.value;
    navigate("/payment", { state: { event, tickets } });
  };

  return (
    <div>
      <h2>{event.name}</h2>
      <p>₹{event.price}</p>

      <input ref={ticketRef} placeholder="Tickets" />

      <button onClick={handleBooking}>Proceed</button>
    </div>
  );
}

export default Booking;