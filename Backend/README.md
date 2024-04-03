# Voyager Vistha Backend

## Description
Voyager Vistha Backend is the server-side component of the Voyager Vistha travel planning platform. It handles data storage, retrieval, and business logic to support the platform's functionalities.

## Tech Stack
- Node.js
- Express.js
- Database: MongoDB, Firebase
- Authentication: JSON Web Tokens (JWT)
- API: Google Maps API (for geolocation services)

## Installation
1. Clone the repository: `git clone https://github.com/yourusername/voyager-vistha-backend.git`
2. Install dependencies: `npm install`
3. Set up environment variables for database connection strings, API keys, and other configurations.
4. Start the server: `npm start`

## API Endpoints
- `/api/users`: User-related endpoints (authentication, profile management)
- `/api/trips`: Trip-related endpoints (creation, retrieval, modification)
- `/api/accommodations`: Accommodation-related endpoints (listing, booking)
- `/api/tours`: Tour-related endpoints (listing, booking)
- `/api/reviews`: Review-related endpoints (listing, submission)
- `/api/events`: Event-related endpoints (listing, retrieval)

## Database Schema
- Users
  - Username
  - Email
  - Password (hashed)
  - Profile Information

- Trips
  - User ID
  - Destination
  - Dates
  - Activities

- Accommodations
  - Name
  - Location
  - Price
  - Availability

- Tours
  - Name
  - Destination
  - Price
  - Duration

- Reviews
  - User ID
  - Item ID (Accommodation, Tour)
  - Rating
  - Comment

## Contributing
Contributions are welcome. Fork the repository, make your changes, and submit a pull request following the contribution guidelines.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For inquiries or feedback, contact [your email address].

## Acknowledgements
We thank the open-source community for their contributions and support.
