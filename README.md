This repository contains my submission for the Developer Role Challenge, focusing on implementing a scheduling feature, fixing critical bugs, and optimizing performance for a job-matching platform.
Contents
- Features
- Technologies Used
- Installation
- API Documentation
- Testing
- Performance Optimization
- Future Recommendations

Features
1. Scheduling Feature
Implemented a feature that allows users to:
- Schedule meetings with details like date, time, and participants.
- View scheduled meetings on a responsive UI.
- Reschedule or cancel existing meetings.
2. Bug Fix: Random Logout Issue
- Resolved session management problems by debugging cookie handling and token refreshing logic.
3. Enhanced Scalability
- Added caching strategies and optimized database queries for high user concurrency.

Technologies Used
- Front-End: React, Tailwind CSS, Material-UI
- Back-End: Node.js, Express.js
- Database Simulation: In-memory JavaScript objects
- Testing: Jest, Postman
- CI/CD: GitHub Actions

Installation
1. Clone the Repository:
git clone https://github.com/Jflowart/FreelanceHub-Platform-Challenge-.git 

2. Install Dependencies:
cd repository-name 
npm install  

4. Run the Application:
- Start the front-end:
npm start
 
- Start the back-end:
node server.js  

API Documentation
API endpoints created for scheduling feature:

1. POST /meetings: Create a new meeting.
2. GET /users/:userId/available-slots: Fetch available slots.
3. PUT /meetings/:meetingId: Update a meeting.
4. DELETE /meetings/:meetingId: Cancel a meeting.
For detailed request and response formats, see the API Documentation.

Testing
Test Coverage:
- Unit Tests: Covered most of scenarios, including edge cases like overlapping meeting times.
- Tools: Jest for unit testing, Postman for API testing.
How to Run Tests:
npm test

Performance Optimization
- Implemented caching strategies to reduce API response time.
- Conducted load testing to ensure scalability to handle multiple users simultaneously scheduling meetings without impacting the platform's performance.

Future Recommendations
- Add database integration for persistence.
- Introduce advanced analytics on the dashboard for user engagement insights.
