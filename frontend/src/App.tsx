// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense, Component } from "react";
import type { ReactNode } from "react";

// Lazy load LandingPage from src/pages
const LandingPage = lazy(() => import("./public/LandingPage"));
const Signup = lazy(() => import("./public/Signup"));
const LoginPage = lazy(() => import("./public/LoginPage"));
const ForgotPasswordPage = lazy(() => import("./public/ForgotPassword"));
const Dashboard = lazy(() => import("./public/Dashboard"));
const FavoritePlaces = lazy(() => import("./public/FavoritePlaces"));
const AboutusPage = lazy(() => import("./public/Aboutuspage"));





// Error Boundary Component
class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ textAlign: "center", padding: "100px" }}>
          <h2>Something went wrong.</h2>
          <p>Unable to load this page. Please try again later.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

// Main App Component
const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div style={{ textAlign: "center", padding: "100px" }}>Loading...</div>}>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/favoriteplaces" element={<FavoritePlaces />} />
            <Route path="/aboutuspage" element={<AboutusPage />} />



            {/* Add more routes here later */}
          </Routes>
        </ErrorBoundary>
      </Suspense>
    </Router>
  );
};

export default App;
