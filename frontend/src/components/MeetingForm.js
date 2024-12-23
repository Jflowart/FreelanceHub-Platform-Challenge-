
import React, { useState } from 'react';

function MeetingForm({ onAddMeeting }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMeeting({ title, date, time });
    setTitle('');
    setDate('');
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Schedule a Meeting</h2>
      <input
        type="text"
        placeholder="Meeting Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <button type="submit">Add Meeting</button>
    </form>
  );
}

export default MeetingForm;
