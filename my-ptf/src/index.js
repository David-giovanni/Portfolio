import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import image from "./Assets/image.jpg";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Full Stack Developer",
    company: "SETITEC",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel erat in urna tincidunt ornare. Donec at nisi sit amet",
    technologies: ["Javascript", "React", "Node.js", "Express"],
  },
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel erat in urna tincidunt ornare. Donec at nisi sit amet",
    technologies: ["Javascript", "React", "Node.js", "Express"],
  },
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel erat in urna tincidunt ornare. Donec at nisi sit amet",
    technologies: ["Javascript", "React", "Node.js", "Express"],
  },
];

export const PROJECTS = [
  {
    title: "E-commerce Website",
    image: image,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel erat in urna tincidunt ornare. Donec at nisi sit amet",
    technologies: ["Javascript", "React", "Node.js", "Express"],
  },
  {
    title: "E-commerce Website",
    image: image,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel erat in urna tincidunt ornare. Donec at nisi sit amet",
    technologies: ["Javascript", "React", "Node.js", "Express"],
  },
  {
    title: "E-commerce Website",
    image: image,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel erat in urna tincidunt ornare. Donec at nisi sit amet",
    technologies: ["Javascript", "React", "Node.js", "Express"],
  },
];
