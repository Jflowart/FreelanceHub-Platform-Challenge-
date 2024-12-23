
import React from 'react';

function MeetingList({ meetings }) {
  return (
    <div>
      <h2>Upcoming Meetings</h2>
      <ul>
        {meetings.map((meeting, index) => (
          <li key={index}>
            {meeting.title} on {meeting.date} at {meeting.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MeetingList;
