import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">AI Code Reviewer</h1>
        <p className="home-description">
          Instantly review your code with AI assistance. Get suggestions, spot issues, and improve your code quality in seconds.
        </p>
        <Link to="/review" className="home-button">Go to Code Review</Link>
      </div>
    </div>
  );
}

export default Home;
