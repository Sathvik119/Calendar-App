# Communication Tracking System

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Project Structure](#project-structure)
7. [Components Overview](#components-overview)
8. [Styles](#styles)
9. [Future Improvements](#future-improvements)

---

## Project Overview
The **Communication Tracking System** is a React-based web application designed to streamline communication management between users and companies. It provides an interface to log, track, and analyze communication records using dashboards for both users and admins, with an integrated analytics module.

---

## Features
- **Admin Dashboard:**
  - Add companies with details like name, location, emails, phone numbers, and communication periodicity.
  - View, delete, and manage company data.

- **User Dashboard:**
  - Add new companies with next communication schedules.
  - Log communications and automatically schedule follow-ups.
  - Highlight overdue and due-today communications.

- **Analytics Module:**
  - Visual representation of communication frequency by type using bar charts.

- **Centralized Navigation:**
  - A dynamic menu to navigate between Home, User, Admin, and Analytics pages.

---

## Tech Stack
- **Frontend:** React.js
- **Styling:** CSS (centralized in `App.css`)
- **Charting Library:** react-chartjs-2 (built on Chart.js)
- **Routing:** React Router DOM

---

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/communication-tracking-system.git
   cd communication-tracking-system
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open the application in your browser at `http://localhost:3000`.

---

## Usage
1. **Home Page:**
   - Serves as a landing page with a brief introduction.

2. **Admin Dashboard:**
   - Add and manage companies with various attributes.

3. **User Dashboard:**
   - Schedule and log communications with companies.
   - Highlight overdue and upcoming tasks.

4. **Analytics Dashboard:**
   - Visualize communication frequency by type using bar charts.

---

## Project Structure
```
src/
|-- Components/
|   |-- AdminDashboard.js       # Admin dashboard functionality
|   |-- UserDashboard.js        # User dashboard functionality
|   |-- Analytics.js            # Analytics module with charts
|-- App.js                      # Main application component
|-- App.css                     # Consolidated styling for the app
|-- index.js                    # Entry point of the application
```

---

## Components Overview
### 1. **AdminDashboard.js**
- Manages company information.
- Allows CRUD operations on companies.
- Uses forms for input fields and dynamic table updates.

### 2. **UserDashboard.js**
- Displays companies and their last/next communication logs.
- Highlights overdue communications in red and due-today in yellow.
- Includes a modal for logging new communication entries.

### 3. **Analytics.js**
- Integrates `react-chartjs-2` for visual analytics.
- Displays communication frequency by type.
- Dynamically updates based on user and admin logs.

### 4. **App.js**
- Handles routing for the application using `react-router-dom`.
- Includes a navigation menu and centralizes page rendering.

---

## Styles
The styling for the application is consolidated into `App.css`, which includes:
- **Global Styles:**
  - Reset and base styles.
- **Layouts:**
  - Centered container for main components.
- **Navigation:**
  - Horizontal menu bar with hover effects.
- **Tables and Forms:**
  - Styled input fields, buttons, and tables for an enhanced UI/UX.

---

## Future Improvements
1. **Backend Integration:**
   - Connect the app to a backend (e.g., Node.js, Express) with a database (e.g., MongoDB) to persist data.

2. **Authentication:**
   - Implement user authentication to restrict access to admin and user dashboards.

3. **Advanced Analytics:**
   - Add pie charts, line graphs, and filters for more detailed insights.

4. **Responsive Design:**
   - Ensure the app is fully responsive for mobile and tablet views.

5. **Email and Notification Integration:**
   - Send automated reminders for upcoming or overdue communications.

---

## Contributors
- **Your Name** - (https://github.com/Sathvik119)

---






