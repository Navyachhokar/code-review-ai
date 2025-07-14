import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CodeReview from './pages/CodeReview';
import './Navbar.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  const HomeNavbar = () => (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Logo" style={{ height: '30px', marginRight: '10px' }} />
        CodeReviewAI
      </div>
      <ul className="navbar-links">
        <li><a href="/review">Review</a></li>
        <li><a href="/signin">Sign In</a></li>
        <li><a href="/signup">Sign Up</a></li>
      </ul>
    </nav>
  );

  const ReviewNavbar = () => (
    <nav className="navbar" style={{ position: 'absolute', top: 0, width: '100%', zIndex: 1000 }}>
      <div className="navbar-logo">
        <img src="/logo.png" alt="Logo" style={{ height: '30px', marginRight: '10px' }} />
        CodeReviewAI
      </div>
      <div className="navbar-links">
        <a href="/" className="nav-button">Home</a>
      </div>
    </nav>
  );

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <HomeNavbar />
              <Home />
            </div>
          }
        />
        <Route
          path="/review"
          element={
            <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
              <ReviewNavbar />
              <div style={{ flex: 1, marginTop: '3.5rem', overflow: 'hidden' }}>
                <CodeReview />
              </div>
            </div>
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
