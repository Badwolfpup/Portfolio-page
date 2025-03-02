export interface ProjectType {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  githubUrl: string;
  technologies: string[];
}

export const projects: ProjectType[] = [
  {
    id: "e-commerce-platform",
    title: "E-Commerce Platform",
    shortDescription: "A full-stack e-commerce platform with React, Node.js, and MongoDB.",
    description: "This e-commerce platform provides a complete shopping experience with user authentication, product browsing, cart management, and checkout functionality.\n\nThe front-end is built with React and uses Redux for state management. The UI is designed with a focus on usability and responsive design, ensuring a seamless experience across all devices.\n\nThe back-end is powered by Node.js and Express, with MongoDB as the database. It includes RESTful APIs for product management, user authentication, and order processing.\n\nThe project also includes an admin dashboard for managing products, orders, and users.",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    githubUrl: "https://github.com/yourusername/e-commerce-platform",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "JWT", "Stripe API"]
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    shortDescription: "A Trello-inspired task management application with drag-and-drop functionality.",
    description: "This task management application allows users to create boards, lists, and cards to organize their tasks. It features drag-and-drop functionality for easy task management.\n\nThe application is built with React and TypeScript, using React Beautiful DnD for the drag-and-drop functionality. State management is handled with React Context API and useReducer.\n\nThe back-end is built with Node.js and Express, with PostgreSQL as the database. It includes RESTful APIs for board, list, and card management, as well as user authentication.\n\nThe application also includes real-time collaboration features using Socket.io, allowing multiple users to work on the same board simultaneously.",
    thumbnail: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    githubUrl: "https://github.com/yourusername/task-management-app",
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Socket.io", "React Beautiful DnD"]
  },
  {
    id: "weather-app",
    title: "Weather App",
    shortDescription: "A weather application that provides current weather and forecasts for any location.",
    description: "This weather application allows users to search for any location and view the current weather conditions as well as a 5-day forecast.\n\nThe application is built with React and uses the OpenWeatherMap API to fetch weather data. It includes features like geolocation to automatically detect the user's location, unit conversion between Celsius and Fahrenheit, and a responsive design for all devices.\n\nThe UI is designed with a clean and intuitive interface, with weather icons and color schemes that change based on the current weather conditions and time of day.\n\nThe application also includes a feature to save favorite locations for quick access.",
    thumbnail: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    githubUrl: "https://github.com/yourusername/weather-app",
    technologies: ["React", "OpenWeatherMap API", "Geolocation API", "CSS Modules"]
  }
];