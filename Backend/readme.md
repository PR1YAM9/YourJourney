User-related Endpoints:
User Registration:

POST /api/users/register
User Login:

POST /api/users/login
User Logout:

POST /api/users/logout

User Profile:
GET /api/users/:userId
PUT /api/users/:userId (for updating user profiles)
Journey-related Endpoints:
Submit a Journey:

POST /api/journeys
Get Journeys:

GET /api/journeys
GET /api/journeys/:userId (retrieve journeys for a specific user)
Get Journey Details:

GET /api/journeys/:journeyId
Update Journey:

PUT /api/journeys/:journeyId
Delete Journey:

DELETE /api/journeys/:journeyId
Comment-related Endpoints:
Add Comment to a Journey:

POST /api/journeys/:journeyId/comments
Get Comments for a Journey:

GET /api/journeys/:journeyId/comments
Update Comment:

PUT /api/journeys/:journeyId/comments/:commentId
Delete Comment:

DELETE /api/journeys/:journeyId/comments/:commentId
Search and Filtering:
Search Journeys:

GET /api/journeys/search?q=keywords
Filter Journeys by Category:

GET /api/journeys/category/:category
Authentication-related Endpoints:
Check Authentication Status:
GET /api/auth/status
Miscellaneous:
Get Popular Journeys:

GET /api/journeys/popular
Get Recent Journeys:

GET /api/journeys/recent