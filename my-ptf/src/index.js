import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import logo from "./Assets/logo.png";
import Dashboard from "./Assets/Dashboard.jpg";
import Crypto from "./Assets/Crypto.jpg";
import Travel from "./Assets/Travel.jpg";
import Restaurant from "./Assets/Restaurant.png";
import CarReservation from "./Assets/CarReservation.jpg";
import { FaGithub } from "react-icons/fa";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    image: logo,
    role: "Full Stack Developer",
    company: "SETITEC",
    description:
      "Apprenticeship as a full-stack developer. Development of web and mobile applications.",
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "VBA",
      "Power BI",
      "Workfront / Fusion",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Dashboard / Epitech",
    image: Dashboard,
    description:
      "I developed a dashboard website that integrates multiple APIs, providing users with comprehensive and real-time data visualization and analytics.",
    technologies: ["React", "Tailwind", "Gradle", "PHP"],
    lien: [
      <a href="https://github.com/David-giovanni/car_reservation">
        <FaGithub icon={FaGithub} className="" />
      </a>,
    ],
  },
  {
    title: "Cryptocurrency Website / Epitech",
    image: Crypto,
    description:
      "I developed a website dedicated to cryptocurrency, allowing users to track real-time prices, analyze market trends, and securely manage their investment portfolios.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Docker"],
  },
  {
    title: "Travel Planning Website / Epitech",
    image: Travel,
    description:
      "I developed a website that allows users to plan their trips, providing comprehensive information on hotels, restaurants, and other travel-related services.",
    technologies: ["React", "Tailwind", "Node.js", "Express", "MariaDB"],
  },
  {
    title: "Reservation Website / Epitech",
    image: Restaurant,
    description:
      "I developed a website that enables users to place orders directly from their phones using a QR code, streamlining the ordering process for enhanced convenience.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Docker"],
  },

  {
    title: "Car Reservation Website / Setitec",
    image: CarReservation,
    description:
      "I developed a website that allows users to reserve company cars for specific dates, streamlining the booking process and ensuring vehicle availability.",
    technologies: ["React", "Tailwind", "Node.js", "Express", "PostgreSQL"],
  },
];
