
import React, { useState } from 'react';
import MeetingForm from './components/MeetingForm';
import MeetingList from './components/MeetingList';

function App() {
  const [meetings, setMeetings] = useState([]);

  const addMeeting = (meeting) => setMeetings([...meetings, meeting]);

  return (
    <div className="App">
      <MeetingForm onAddMeeting={addMeeting} />
      <MeetingList meetings={meetings} />
    </div>
  );
}

export default App;
