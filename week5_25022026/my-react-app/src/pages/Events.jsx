import { useNavigate } from "react-router-dom";

const events = [
  {
    id: 1,
    name: "Fake Wedding 💍",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Strangers Party 🎉",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Rooftop Dinner 🌃",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
  },
];

function Events() {
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Events 🔥</h1>

      <div className="row">
        {events.map((e) => (
          <div className="col-md-4" key={e.id}>
            <div className="card shadow mb-4">
              
              {/* ✅ IMAGE ADDED */}
              <img
                src={e.image}
                alt={e.name}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />

              <div className="card-body text-center">
                <h5>{e.name}</h5>
                <p>₹{e.price}</p>

                <button
                  className="btn btn-dark"
                  onClick={() => navigate(`/booking/${e.id}`)}
                >
                  Book
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;