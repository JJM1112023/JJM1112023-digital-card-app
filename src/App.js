/**
 * App Component - iHubGo Clone Demo
 *
 * Renders a sidebar navigation and a grid of post cards.
 *
 * Usage:
 *   import App from './App';
 *   <App />
 *
 * Styling:
 *   - Requires 'App.css' for layout and card styles.
 *   - Main layout uses Flexbox for sidebar/content arrangement.
 *   - `.card` class styles each post card with padding and a button.
 *   - Customize `.sidebar`, `.header`, `.card-grid` in App.css as needed.
 *
 * Props:
 *   - None (uses local 'posts' array for demo data)
 *
 * Example CSS selectors:
 *   .app-container, .header, .main-layout, .sidebar, .content, .card-grid, .card
 *
 * Accessibility:
 *   - Basic semantic elements used.
 */

import React from "react";
import "./App.css";

const posts = [
  { id: 1, title: "Post Title 1", description: "Description of the first post." },
  { id: 2, title: "Post Title 2", description: "Description of the second post." },
  { id: 3, title: "Post Title 3", description: "Description of the third post." },
  { id: 4, title: "Post Title 4", description: "Description of the fourth post." }
];

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>iHubGo Clone</h1>
      </header>
      <div className="main-layout">
        <aside className="sidebar">
          <nav>
            <ul>
              <li>What's New</li>
              <li>Trending</li>
              <li>Categories</li>
            </ul>
          </nav>
        </aside>
        <main className="content">
          <h2>What's New</h2>
          <div className="card-grid">
            {posts.map(post => (
              <div key={post.id} className="card">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <button>Read More</button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;