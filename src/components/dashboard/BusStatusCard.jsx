function BusStatusCard({ busNumber, driver, status, location }) {
  return (
    <div className="bus-card">
      <div>
        <h3>{busNumber}</h3>

        <p>Driver: {driver}</p>

        <p>Location: {location}</p>
      </div>

      <span className={`status ${status.toLowerCase()}`}>
        {status}
      </span>
    </div>
  );
}

export default BusStatusCard;