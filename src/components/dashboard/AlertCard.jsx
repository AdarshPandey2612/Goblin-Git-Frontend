function AlertCard({ title, message, time, type }) {
  return (
    <div className={`alert-card ${type}`}>
      <div>
        <h3>{title}</h3>

        <p>{message}</p>
      </div>

      <span>{time}</span>
    </div>
  );
}

export default AlertCard;