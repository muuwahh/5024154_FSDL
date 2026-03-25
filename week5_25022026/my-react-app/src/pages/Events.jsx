import { useNavigate } from "react-router-dom";

const events = [
  {
    id: 1,
    name: "Fake Wedding 💍",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=500",
  },
  {
    id: 2,
    name: "Strangers Party 🎉",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=500",
  },
  {
    id: 3,
    name: "Rooftop Dinner 🌃",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500",
  },
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