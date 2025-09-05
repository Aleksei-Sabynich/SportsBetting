import { Link, useLocation } from "react-router-dom";
import { events } from "../../data/events";
import Notification from "../../components/notification/Notification";
import "./Home.css";

type LocationState = {
  message?: string; 
};

const HomePage: React.FC = () => {
  const location = useLocation();
  const state = location.state as LocationState | null; 
  const notification = state?.message || null;

  return (
    <div className="home-page">
      {notification && <Notification message={notification} />}
      <h1 className="home-title">События</h1>
      <ul className="event-list">
        {events.map((event) => (
          <li key={event.id} className="event-item">
            <Link to={`/event/${event.id}`} className="event-link">
              <div>{event.team1} vs {event.team2}</div>
              <div className="event-date">{event.date}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;