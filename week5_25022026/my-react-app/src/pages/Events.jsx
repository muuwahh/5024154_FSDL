import { useNavigate } from "react-router-dom";

const events = [
  { id: 1, name: "Fake Wedding 💍", price: 499 },
  { id: 2, name: "Strangers Party 🎉", price: 299 },
  { id: 3, name: "Rooftop Dinner 🌃", price: 999 },
];

function Events() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Events 🔥</h1>

      {events.map((e) => (
        <div key={e.id}>
          <h3>{e.name}</h3>
          <p>₹{e.price}</p>

          <button onClick={() => navigate(`/booking/${e.id}`)}>
            Book
          </button>
        </div>
      ))}
    </div>
  );
}

export default Events;