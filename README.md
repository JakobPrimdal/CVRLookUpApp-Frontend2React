# CVRLookUpApp Frontend (React)

A React-based frontend for searching Danish companies using their CVR number.

The application allows users to enter a CVR number and retrieve company information.
Company data is fetched through a backend API which collects data from the public **Virk Data API (virkdata.dk)**.

This project is part of a full-stack portfolio project consisting of a separate frontend and backend.

---

# Overview

The CVRLookUpApp frontend provides a simple interface for searching Danish companies by their CVR number.

Users can enter an 8-digit CVR number and view company information returned from the backend API.

The goal of the project is to demonstrate:

* React frontend architecture
* API communication with a backend service
* input validation and basic security practices
* clean component structure

---

# Features

* Search for companies by CVR number
* Input validation (CVR must be exactly **8 digits**)
* Fetch company data from backend API
* Display company information on a result page
* Client-side routing using React Router
* Basic XSS protection using React's built-in escaping
* Clean component-based structure

---

# Tech Stack

Frontend technologies used in this project:

* **React**
* **Vite**
* **React Router**
* **JavaScript (ES6+)**
* **CSS**
* **npm**

---

# Project Structure

```
src
 ├── assets
 ├── components
 │   ├── CvrSearch.jsx
 │   ├── DataBox.jsx
 │   └── TopBox.jsx
 │
 ├── models
 │   └── Cvr.js
 │
 ├── pages
 │   ├── Home.jsx
 │   └── Result.jsx
 │
 ├── services
 │   └── CvrService.js
 │
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

**Key folders**

* **components** – reusable UI components
* **pages** – main application views
* **services** – API communication with backend
* **models** – data structures used in the application

---

# Backend

This frontend communicates with a separate backend service.

Backend repository:

```
CVRLookUpApp-Backend
```

The backend handles:

* communication with the Virk Data API
* validation
* formatting company data for the frontend

---

# Company Data Returned

When a company is found, the application may display the following data:

* VAT / CVR number
* Company name
* Status
* Address
* Zip code
* City
* Protection status
* Phone
* Email
* Fax
* Start date
* End date
* Website
* Number of employees
* Industry code
* Industry description
* Company type
* Company type description
* Owners

Note: Available data depends on what is returned by the Virk API.

---

# Security Considerations

Basic security measures implemented in the frontend:

**Input validation**

The CVR search field validates that:

* input contains **only numbers**
* the CVR number is **exactly 8 digits**

**XSS Protection**

React automatically escapes rendered values which helps protect against Cross-Site Scripting (XSS).

---

# Environment Variables

API configuration is handled using environment variables.

Create a `.env` file in the project root:

```
VITE_API_URL=your_backend_api_url
```

Example:

```
VITE_API_URL=http://localhost:8080
```

The `.env` file is excluded from GitHub via `.gitignore`.

---

# Installation

Clone the repository:

```
git clone https://github.com/YOUR_USERNAME/CVRLookUpApp-Frontend2React.git
```

Navigate to the project directory:

```
cd CVRLookUpApp-Frontend2React
```

Install dependencies:

```
npm install
```

Start the development server:

```
npm run dev
```

The application will typically run at:

```
http://localhost:5173
```

---

# Future Improvements

Possible improvements for the project:

* improved UI/UX design
* loading states and better error handling
* unit tests for components
* caching of API responses
* improved company data visualization

---

# Purpose

This project was created as a **portfolio project** to demonstrate full-stack development skills using:

* React
* Java backend API
* external data integration

---

# Author

Created by **Jakob Primdal**, Datamatiker/Computer Science Student
