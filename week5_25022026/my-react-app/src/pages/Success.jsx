import { useLocation } from "react-router-dom";

function Success() {
  const { state } = useLocation();

  return (
    <div>
      <h1>🎉 Success</h1>
      <p>{state.event.name}</p>
      <p>Tickets: {state.tickets}</p>
      <p>Total Paid: ₹{state.total}</p>
    </div>
  );
}

export default Success;