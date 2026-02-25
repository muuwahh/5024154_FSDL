import EventCard from "../components/EventCard";

function Home() {
  const events = [
    { id: 1, name: "Fake Shaadi", price: 299 },
    { id: 2, name: "Saddi Gali Night", price: 199 },
    { id: 3, name: "Bollywood Rave", price: 399 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎟️ HypeSpot Events</h1>

      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default Home;
