import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense, Component } from "react";
import type { ReactNode } from "react";

// Lazy load pages
const LandingPage = lazy(() => import("./public/LandingPage"));
const Signup = lazy(() => import("./public/Signup"));
const LoginPage = lazy(() => import("./public/LoginPage"));
const ForgotPasswordPage = lazy(() => import("./public/ForgotPassword"));
const Dashboard = lazy(() => import("./public/Dashboard"));
const FavoritePlaces = lazy(() => import("./public/FavoritePlaces"));
const AboutusPage = lazy(() => import("./public/Aboutuspage"));
const Notifications = lazy(() => import("./public/Notifications"));
const Settings = lazy(() => import("./public/Settings"));
const TreksPage = lazy(() => import("./public/TreksPage"));
const TrekDetailPage = lazy(() => import("./public/TrekDetails"));

// Error Boundary Component
class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // You can also log the error to an error reporting service
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ textAlign: "center", padding: "100px", color: "#e63946" }}>
          <h2>Something went wrong.</h2>
          <p>We're having trouble loading this part of the application. Please try refreshing.</p>
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
      <Suspense fallback={<div style={{ textAlign: "center", padding: "100px", color: "#457b9d" }}>Loading application content...</div>}>
        <ErrorBoundary>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
            <Route path="/aboutuspage" element={<AboutusPage />} />
            <Route path="/treks" element={<TreksPage />} />
            <Route path="/treks/:id" element={<TrekDetailPage />} />

            {/* Private/Authenticated Routes */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/favoriteplaces" element={<FavoritePlaces />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/settings" element={<Settings />} />
            {/* NOTE: I assumed '/profile' from the Navbar was meant to go to Dashboard or a new route. I'll default it to Dashboard for simplicity. */}
            <Route path="/profile" element={<Dashboard />} /> 
          </Routes>
        </ErrorBoundary>
      </Suspense>
    </Router>
  );
};

export default App;