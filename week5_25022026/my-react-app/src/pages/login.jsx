import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div style={styles.bg}>
      <div style={styles.card}>
        <h1>HypeSpot ✨</h1>

        <button
          style={styles.btn}
          onClick={() => navigate("/events")}
        >
          Login
        </button>
      </div>
    </div>
  );
}

const styles = {
  bg: { minHeight: "100vh", background: "#667eea", padding: "20px" },
  card: { background: "white", padding: "20px", borderRadius: "20px", textAlign: "center" },
  btn: { padding: "10px", width: "100%", borderRadius: "10px" },
};

export default Login;