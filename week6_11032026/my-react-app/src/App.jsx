function App() {

  const workouts = [
    "🏃 Running",
    "💪 Gym Workout",
    "🧘 Yoga",
    "🚴 Cycling"
  ];

  return (
    <div style={styles.body}>

      <div style={styles.card}>
        <h1 style={styles.title}>💪 FitTrack</h1>
        <p style={styles.subtitle}>Track Your Daily Fitness</p>

        <h3 style={{marginTop: "20px"}}>Today's Activities:</h3>

        <ul style={styles.list}>
          {workouts.map((w, i) => (
            <li key={i} style={styles.item}>{w}</li>
          ))}
        </ul>

        <button style={styles.button}
          onClick={() => alert("Workout Started 🚀")}>
          Start Workout
        </button>
      </div>

    </div>
  );
}

// 🔥 PREMIUM CSS (INLINE STYLE)
const styles = {
  body: {
    height: "100vh",
    background: "linear-gradient(135deg, #141e30, #243b55)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins, sans-serif",
    color: "white"
  },

  card: {
    background: "rgba(255,255,255,0.05)",
    padding: "30px",
    borderRadius: "20px",
    textAlign: "center",
    width: "300px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
    backdropFilter: "blur(10px)"
  },

  title: {
    color: "#00eaff",
    fontWeight: "700"
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
    borderRadius: "10px"
  },

  button: {
    marginTop: "15px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "10px",
    background: "linear-gradient(45deg, #00eaff, #0077ff)",
    color: "white",
    fontWeight: "600",
    cursor: "pointer"
  }
};

export default App;