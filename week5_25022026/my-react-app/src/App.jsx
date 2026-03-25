import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [bookingDone, setBookingDone] = useState(false);

  const events = [
    {
      name: "Fake Wedding Experience 💍",
      price: "₹499",
      image:
        "https://images.unsplash.com/photo-1606800052052-a08af7148866",
    },
    {
      name: "Strangers Party 🎉",
      price: "₹299",
      image:
        "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf",
    },
    {
      name: "Aesthetic Rooftop Dinner 🌃",
      price: "₹999",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleBooking = (e) => {
    e.preventDefault();
    setBookingDone(true);
  };

  // 🔐 LOGIN PAGE
  if (!isLoggedIn) {
    return (
      <div className="container text-center mt-5">
        <h1 className="mb-4">HypeSpot ✨</h1>

        <div className="card p-4 mx-auto" style={{ maxWidth: "400px" }}>
          <h3>Login</h3>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              className="form-control my-2"
              placeholder="Email"
              required
            />
            <input
              type="password"
              className="form-control my-2"
              placeholder="Password"
              required
            />
            <button className="btn btn-dark w-100 mt-2">Login</button>
          </form>
        </div>
      </div>
    );
  }

  // 🎟️ BOOKING PAGE
  if (selectedEvent) {
    return (
      <div className="container mt-5 text-center">
        <h2>Book: {selectedEvent.name}</h2>

        {!bookingDone ? (
          <form
            onSubmit={handleBooking}
            className="card p-4 mx-auto mt-3"
            style={{ maxWidth: "400px" }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="form-control my-2"
              required
            />
            <input
              type="number"
              placeholder="Tickets"
              className="form-control my-2"
              required
            />
            <button className="btn btn-success mt-2">
              Confirm Booking
            </button>
          </form>
        ) : (
          <div className="mt-4">
            <h3>✅ Booking Confirmed!</h3>
            <p>See you at {selectedEvent.name} 🎉</p>
            <button
              className="btn btn-primary"
              onClick={() => {
                setSelectedEvent(null);
                setBookingDone(false);
              }}
            >
              Back to Events
            </button>
          </div>
        )}
      </div>
    );
  }

  // 🎉 EVENTS PAGE
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">HypeSpot 🔥</h1>

      <div className="row">
        {events.map((event, index) => (
          <div className="col-md-4" key={index}>
            <div className="card shadow mb-4">
              <img
                src={event.image}
                className="card-img-top"
                style={{ height: "220px", objectFit: "cover" }}
                alt={event.name}
              />

              <div className="card-body text-center">
                <h5>{event.name}</h5>
                <p>{event.price}</p>
                <button
                  className="btn btn-dark"
                  onClick={() => setSelectedEvent(event)}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          className="btn btn-danger"
          onClick={() => setIsLoggedIn(false)}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default App;