import { useState, useEffect } from "react";

function App() {
  const workouts = ["🏃 Running", "💪 Gym Workout", "🧘 Yoga", "🚴 Cycling"];

  const [selected, setSelected] = useState(null);
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  // ⏱ Timer logic
  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running]);

  // Format time (mm:ss)
  const formatTime = (t) => {
    const min = String(Math.floor(t / 60)).padStart(2, "0");
    const sec = String(t % 60).padStart(2, "0");
    return `${min}:${sec}`;
  };

  return (
    <div style={styles.body}>
      <div style={styles.card}>
        <h1 style={styles.title}>💪 FitTrack</h1>
        <p style={styles.subtitle}>Track Your Fitness</p>

        {!selected && (
          <>
            <h3>Select Workout:</h3>
            <ul style={styles.list}>
              {workouts.map((w, i) => (
                <li
                  key={i}
                  style={styles.item}
                  onClick={() => {
                    setSelected(w);
                    setTime(0);
                    setRunning(false);
                  }}
                >
                  {w}
                </li>
              ))}
            </ul>
          </>
        )}

        {selected && (
          <>
            <h2>{selected}</h2>
            <h1>{formatTime(time)}</h1>

            <div style={{ marginTop: "15px" }}>
              <button
                style={styles.button}
                onClick={() => setRunning(true)}
              >
                ▶ Start
              </button>

              <button
                style={styles.button}
                onClick={() => setRunning(false)}
              >
                ⏸ Stop
              </button>

              <button
                style={styles.button}
                onClick={() => {
                  setTime(0);
                  setRunning(false);
                }}
              >
                🔄 Reset
              </button>
            </div>

            <button
              style={{ ...styles.button, marginTop: "15px" }}
              onClick={() => setSelected(null)}
            >
              ⬅ Back
            </button>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  body: {
    height: "100vh",
    background: "linear-gradient(135deg, #141e30, #243b55)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontFamily: "sans-serif"
  },

  card: {
    background: "rgba(255,255,255,0.05)",
    padding: "30px",
    borderRadius: "20px",
    textAlign: "center",
    width: "320px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
  },

  title: {
    color: "#00eaff"
  },

  subtitle: {
    color: "#ccc"
  },

  list: {
    listStyle: "none",
    padding: 0
  },

  item: {
    padding: "10px",
    margin: "8px 0",
    background: "rgba(255,255,255,0.1)",
    borderRadius: "10px",
    cursor: "pointer"
  },

  button: {
    margin: "5px",
    padding: "10px 15px",
    border: "none",
    borderRadius: "10px",
    background: "#00eaff",
    cursor: "pointer"
  }
};

export default App;