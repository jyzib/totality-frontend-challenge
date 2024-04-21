# Totality Frontend Challenge

This repository contains the solution for the Totality Frontend Challenge, which aims to develop a property rental platform with essential features using React. The challenge includes implementing property listings, booking management, checkout process, and ensuring responsive design.

## Tech Stack:

- **React**: Utilized for building the frontend components and managing the application's state.
- **Next.js**: Employed for server-side rendering and routing, enhancing performance and SEO.
- **TypeScript**: Used to add static typing for improved code quality and maintainability.
- **MongoDB**: Integrated for data storage and management of property listings and user information.
- **Node.js + Express**: Utilized for server-side logic and implementing server actions like sending email booking reports using Nodemailer.
- **Nodemailer**: Integrated for sending booking confirmation emails to users.
- **JWT Authentication**: Implemented for user authentication and protecting routes.
- **Material-UI**: Utilized as a third-party UI library for designing components, ensuring a sleek and consistent UI.

## Project Structure:


│
├── frontend/ # Frontend codebase
│ ├── components/ # React components
│ ├── pages/ # Next.js pages
│ ├── public/ # Public assets
│ └── ...
│
├── backend/ # Backend codebase
│ ├── api/ # Controllers for handling HTTP requests
│ ├── model/ # MongoDB models
│ ├── routes/ # API routes
│ ├── _action/ # Utility functions
│ └── ...
│
├── README.md # Project overview, setup instructions, and notes
└── ...


## Features Implemented:

1. **Property Listings**:
   - Display various properties with images, titles, descriptions, prices, and booking buttons.
   - Implement filters for sorting properties by location, price range, bedrooms, or amenities real time update .

2. **Booking Management**:
   - Allow users to book properties and manage bookings in a cart section and added nodemailer for sending mail on procuse to payment .
   - Real-time updates of cart total and booking count.
   - Users can add, remove.

3. **Checkout Process**:
   - Calculate the total cost of booked properties.
   - Collect booking details, including contact information and payment details and send mail to user about that property .

4. **Responsive Design**:
   - Ensure seamless functionality and optimal viewing experience across desktop and mobile devices If i get time can make more viewing.

5. **User Authentication**:
   - User registration and login functionalities with Clerk authentication.
   - Display user's name and avatar when logged in.
   - Protect routes to prevent unauthorized access.
   - Nice tostera alert msg when user is not sign in .

## Tech Stack:

- **React**: A JavaScript library for building user interfaces.
- **Next.js**: A React framework for server-side rendering and routing.
- **TypeScript**: A typed superset of JavaScript for improved code quality and maintainability.
- **MongoDB**: A NoSQL database for storing property and user data.
- **Node.js + Express**: A backend framework for implementing server-side logic and APIs.
- **Nodemailer**: A module for sending emails from Node.js, used for sending booking confirmation emails.
- **Tailwind CSS**: A utility-first CSS framework for styling the frontend components.
- **Clerk.js**: A Next.js integration for user authentication and identity management.
- **Radix UI**: UI components library including dialogs, icons, select components, and sliders.
- **Lucid React**: UI  library  icons.
- **Framer Motion**: A React animation library for creating interactive UI.
- **Mongoose**: MongoDB object modeling for Node.js, used for managing MongoDB data models.
- **clsx**: Utility for conditionally joining classNames together.
- **Tailwind CSS Animate**: Tailwind CSS plugin for adding animation utilities.
- **[shadcn](https://ui.shadcn.com/)**: A UI library for adding components.
- **aceternity**: A UI library for enhancing component accessibility and usability.


## Additional Notes:

- **Deployment**: The application is deployed on [Versel](https://vercel.com/) at [homely hub](https://totality-frontend-challenge-mu.vercel.app/) connect ci/cd pipe line for better developement environment.
- **MongoDB**: MongoDB Atlas is used as the cloud database service for storing property and user data.
- **Next.js**: Leveraging Next.js for server-side rendering enhances performance and SEO, providing a smoother user experience.
- **TypeScript**: Integration of TypeScript ensures type safety, reducing bugs and improving code maintainability.
- **Nodemailer**: Nodemailer is configured to send booking confirmation emails to users upon successful booking.

## How to Run Locally:

1. Clone this repository.
2. Navigate to the ` totality-frontend-challenge
` npm install` to install dependencies.

4. Create a `.env` file in the root directory and add necessary environment variables.
5. Run `npm run dev` in the `root` directory to start the Development server.
6. Access the application at `http://localhost:3000`.

## Future Improvements:

- Implement property reviews and a favorites list feature.
- Enhance the checkout process with more payment options and validation.
- Improve error handling and user feedback.
- Enhance the UI/UX based on user feedback and usability testing.

All features mentioned above have been successfully implemented in the application. Feel free to explore the deployed application [here](https://totality-frontend-challenge-mu.vercel.app/), and the codebase on [GitHub](https://github.com/jyzib/totality-frontend-challenge).


