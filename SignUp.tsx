// This file creates the Sign Up page where new users create an account
// It's like filling out a form to join a club - you pick a username and password!

// === IMPORTS (Tools we need) ===
import { useState, useEffect } from 'react'; // Tools for remembering stuff and doing things
import { useNavigate, Link } from 'react-router-dom'; // Tools for moving between pages
import { useAuth } from '../hooks'; // Tool for creating accounts (using Redux!)
import { Brain, AlertCircle, CheckCircle, ArrowLeft } from 'lucide-react'; // Pretty icons
import { motion } from 'motion/react'; // Tool for smooth animations
import Lenis from '@studio-freight/lenis'; // Tool for smooth scrolling

// === MAIN COMPONENT (The Sign Up page) ===
export function SignUp() {
  // === STATE VARIABLES (Things we need to remember) ===
  
  // What user types in username box
  const [username, setUsername] = useState(''); // Starts empty
  
  // What user types in password box
  const [password, setPassword] = useState(''); // Starts empty
  
  // What user types in confirm password box (to make sure they didn't make a typo)
  const [confirmPassword, setConfirmPassword] = useState(''); // Starts empty
  
  // Error message if something goes wrong
  const [error, setError] = useState(''); // Starts empty (no error)
  
  // Are we currently creating the account?
  const [loading, setLoading] = useState(false); // Starts as false
  
  // Get the signup function from our auth tool
  const { signup } = useAuth(); // This creates new accounts
  
  // Get navigation tool
  const navigate = useNavigate();

  // === SETUP SMOOTH SCROLLING ===
  // Runs once when page loads
  useEffect(() => {
    // Create smooth scroller
    const lenis = new Lenis({
      duration: 1.2, // Takes 1.2 seconds
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Math for smooth movement
      smoothWheel: true, // Make mouse wheel smooth
    });

    // Function that runs many times per second to update scroll
    function raf(time: number) {
      lenis.raf(time); // Update
      requestAnimationFrame(raf); // Run again
    }

    requestAnimationFrame(raf); // Start!

    // Cleanup when page closes
    return () => {
      lenis.destroy(); // Stop smooth scroll
    };
  }, []); // Run only once

  // === HANDLE FORM SUBMISSION ===
  // Runs when user clicks "Create Account" button
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Don't refresh the page
    setError(''); // Clear old errors

    // CHECK IF PASSWORDS MATCH
    // If the password and confirm password are different, show error
    if (password !== confirmPassword) {
      setError('Passwords do not match'); // Set error message
      return; // Stop here, don't create account
    }

    // CHECK PASSWORD LENGTH
    // Password must be at least 6 characters long
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return; // Stop here
    }

    setLoading(true); // Start loading

    try {
      // Try to create the account
      await signup(username, password); // Send to server
      
      // If it worked, go to dashboard!
      navigate('/dashboard');
    } catch (err: any) {
      // If it failed, show error
      setError(err.response?.data?.message || 'Failed to create account. Username may already exist.');
    } finally {
      // This runs no matter what
      setLoading(false); // Stop loading
    }
  };

  // === VALIDATION HELPERS ===
  // Check if passwords match (both boxes have text AND they're the same)
  const passwordMatch = password && confirmPassword && password === confirmPassword;
  
  // Check if password is long enough (at least 6 characters)
  const passwordLengthValid = password.length >= 6;

  // === RETURN THE HTML/JSX ===
  return (
    // Main container - full screen, gray background, centered
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      
      {/* Form container - not too wide */}
      <div className="w-full max-w-md">
        
        {/* "Back to home" link */}
        <Link to="/">
          <motion.div
            whileHover={{ x: -5 }} // Slide left on hover
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-12 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to home</span>
          </motion.div>
        </Link>

        {/* Main sign up card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Start invisible and below
          animate={{ opacity: 1, y: 0 }} // Fade in and rise
          transition={{ duration: 0.5 }} // Takes 0.5 seconds
          className="bg-white rounded-3xl shadow-sm border border-gray-200 p-10"
        >
          
          {/* Header with logo and title */}
          <div className="flex flex-col items-center mb-10">
            
            {/* Logo box */}
            <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center mb-6">
              <Brain className="w-7 h-7 text-white" />
            </div>
            
            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Create account
            </h2>
            
            {/* Subtitle */}
            <p className="text-gray-600">Start organizing your knowledge</p>
          </div>

          {/* ERROR MESSAGE (only shows if there's an error) */}
          {error && (
            <motion.div
              initial={{ opacity: 0, x: -20 }} // Start invisible and left
              animate={{ opacity: 1, x: 0 }} // Fade in and slide right
              className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3"
            >
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-800">{error}</p>
            </motion.div>
          )}

          {/* SIGN UP FORM */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* space-y-5 = vertical space between fields */}
            
            {/* USERNAME FIELD */}
            <div>
              {/* Label */}
              <label htmlFor="username" className="block text-sm font-medium text-gray-900 mb-2">
                Username
              </label>
              
              {/* Input box */}
              <input
                id="username"
                type="text" // Regular text
                value={username} // Current value
                onChange={(e) => setUsername(e.target.value)} // Update when user types
                required // Must be filled
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition text-gray-900 placeholder-gray-400"
                placeholder="Choose a username"
              />
            </div>

            {/* PASSWORD FIELD */}
            <div>
              {/* Label */}
              <label htmlFor="password" className="block text-sm font-medium text-gray-900 mb-2">
                Password
              </label>
              
              {/* Input box */}
              <input
                id="password"
                type="password" // Hides text with dots
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition text-gray-900 placeholder-gray-400"
                placeholder="Create a password"
              />
              
              {/* VALIDATION INDICATOR (shows if password is long enough) */}
              {password && ( // Only show if user has typed something
                <motion.div
                  initial={{ opacity: 0, y: -10 }} // Start invisible and above
                  animate={{ opacity: 1, y: 0 }} // Fade in and drop down
                  className="mt-2 flex items-center gap-2"
                >
                  {/* Show green checkmark if valid, gray circle if not */}
                  {passwordLengthValid ? (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-gray-400" />
                  )}
                  
                  {/* Text changes color based on validity */}
                  <span className={`text-xs ${passwordLengthValid ? 'text-green-600' : 'text-gray-500'}`}>
                    At least 6 characters
                  </span>
                </motion.div>
              )}
            </div>

            {/* CONFIRM PASSWORD FIELD */}
            <div>
              {/* Label */}
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-900 mb-2">
                Confirm Password
              </label>
              
              {/* Input box */}
              <input
                id="confirmPassword"
                type="password" // Hides text
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition text-gray-900 placeholder-gray-400"
                placeholder="Confirm your password"
              />
              
              {/* MATCH INDICATOR (shows if passwords match) */}
              {confirmPassword && ( // Only show if user has typed something
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 flex items-center gap-2"
                >
                  {/* Show green check if they match, red X if they don't */}
                  {passwordMatch ? (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-red-600" />
                  )}
                  
                  {/* Text changes color and message based on match */}
                  <span className={`text-xs ${passwordMatch ? 'text-green-600' : 'text-red-600'}`}>
                    {passwordMatch ? 'Passwords match' : 'Passwords do not match'}
                  </span>
                </motion.div>
              )}
            </div>

            {/* CREATE ACCOUNT BUTTON */}
            <motion.button
              whileHover={{ scale: 1.01 }} // Grow slightly on hover
              whileTap={{ scale: 0.99 }} // Shrink slightly on click
              type="submit" // Submits the form
              disabled={loading} // Can't click while loading
              className="w-full bg-black text-white py-3.5 rounded-xl font-medium transition disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 mt-6"
            >
              {/* Show different text based on loading state */}
              {loading ? 'Creating account...' : 'Create Account'}
            </motion.button>
          </form>

          {/* SIGN IN LINK (for people who already have account) */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/signin" className="text-gray-900 hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
