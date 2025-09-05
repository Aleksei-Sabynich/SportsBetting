import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { events } from "../../data/events";
import "./EventDetails.css"; // импортируем стили

const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const event = events.find((e) => e.id === Number(id));
  if (!event) return <div>Событие не найдено</div>;

  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSubmit = () => {
    if (!selectedOption) return;

    navigate("/", {
      state: {
        message: `Спасибо, ваша ставка [${event.team1} vs ${event.team2}, ${selectedOption}] принята`,
      },
    });
  };

  return (
    <div className="event-details">
      <h2 className="event-title">
        {event.team1} vs {event.team2}
      </h2>
      <p className="event-date">{event.date}</p>

      <div className="options">
        <label>
          <input
            type="radio"
            name="bet"
            value="На победу хозяев"
            checked={selectedOption === "На победу хозяев"}
            onChange={(e) => setSelectedOption(e.target.value)}
          />{" "}
          На победу хозяев
        </label>
      </div>
      <div className="options">
        <label>
          <input
            type="radio"
            name="bet"
            value="На ничью"
            checked={selectedOption === "На ничью"}
            onChange={(e) => setSelectedOption(e.target.value)}
          />{" "}
          На ничью
        </label>
      </div>
      <div className="options">
        <label>
          <input
            type="radio"
            name="bet"
            value="На победу гостей"
            checked={selectedOption === "На победу гостей"}
            onChange={(e) => setSelectedOption(e.target.value)}
          />{" "}
          На победу гостей
        </label>
      </div>

      <button
        onClick={handleSubmit}
        disabled={!selectedOption}
        className={`submit-button ${!selectedOption ? "disabled" : ""}`}
      >
        Сделать ставку
      </button>
    </div>
  );
};

export default EventDetails;