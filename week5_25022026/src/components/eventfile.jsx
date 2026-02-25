function EventCard({ event }) {
  const bookTicket = () => {
    alert(`Booked: ${event.name}`);
  };

  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      margin: "10px",
      borderRadius: "10px"
    }}>
      <h2>{event.name}</h2>
      <p>Price: ₹{event.price}</p>

      <button onClick={bookTicket}>
        Book Now
      </button>
    </div>
  );
}

export default EventCard;
