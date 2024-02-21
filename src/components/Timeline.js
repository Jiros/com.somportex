import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import './Timeline.css'; // Importing CSS styles

// Example data for the timeline. Replace with your actual data.
const timelineData = [
  {
    id: 1,
    title: "Event 1",
    text: "Description for Event 1. This paragraph will elaborate on the event's significance.",
    image: "../images/pool.png", // Replace with your image path
  },
  {
    id: 2,
    title: "Event 2",
    text: "Description for Event 2. This paragraph will elaborate on the event's significance.",
    image: "../images/event2.png", // Replace with your image path
  },
  // Add more events as needed
];

const Timeline = () => (
  <div className="timeline-container">
    {timelineData.map((event, index) => (
      <div key={event.id} className={`timeline-item ${index % 2 === 0 ? 'normal' : 'reverse'}`}>
        <div className="timeline-content">
          <h2>{event.title}</h2>
          <p>{event.text}</p>
        </div>
        <div className="timeline-image">
          <StaticImage src={event.image} alt={event.title} />
          {/* For dynamic images, use GatsbyImage component with GraphQL query */}
        </div>
      </div>
    ))}
  </div>
);

export default Timeline;
