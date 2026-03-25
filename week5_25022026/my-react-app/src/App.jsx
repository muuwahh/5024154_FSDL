import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const events = [
    {
      name: "Fake Wedding Experience",
      price: "₹499",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552",
    },
    {
      name: "Stranger Birthday Party",
      price: "₹299",
      image:
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3",
    },
    {
      name: "Luxury Dinner Night",
      price: "₹999",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  // 🔐 LOGIN / SIGNUP PAGE
  if (!isLoggedIn) {
    return (
      <div className="container mt-5 text-center">
        <h1 className="mb-4">HypeSpot 🎉</h1>

        <div className="card p-4 mx-auto" style={{ maxWidth: "400px" }}>
          <h3>{isLogin ? "Login" : "Sign Up"}</h3>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control my-2"
              required
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control my-2"
              required
            />

            {!isLogin && (
              <input
                type="text"
                placeholder="Enter Username"
                className="form-control my-2"
                required
              />
            )}

            <button className="btn btn-primary w-100 mt-2">
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          <p className="mt-3">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <span
              style={{ color: "blue", cursor: "pointer", marginLeft: "5px" }}
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign Up" : "Login"}
            </span>
          </p>
        </div>
      </div>
    );
  }

  // 🎉 HOME PAGE (EVENTS)
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Welcome to HypeSpot 🔥</h1>

      <div className="row">
        {events.map((event, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4 shadow">
              <img
                src={event.image}
                className="card-img-top"
                alt={event.name}
                style={{ height: "200px", objectFit: "cover" }}
              />

              <div className="card-body text-center">
                <h5>{event.name}</h5>
                <p>{event.price}</p>
                <button className="btn btn-success">Book Now</button>
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