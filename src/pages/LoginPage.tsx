import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Crown, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import heroImage from "../assets/hero-hotel.jpg";
import { Button } from "../components/ui/button";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          src={heroImage}
          alt="Luxury hotel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-primary-foreground max-w-md px-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-serif text-4xl font-semibold mb-4"
            >
              Welcome to Grandeur
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-primary-foreground/80"
            >
              Experience world-class hospitality. Manage your bookings, explore exclusive offers, and enjoy personalized services.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
              <Crown className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="font-serif text-2xl font-semibold text-foreground">Grandeur</h1>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Hotels & Resorts</p>
            </div>
          </Link>

          {/* Form Header */}
          <div className="mb-8">
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-2">
              {isSignUp ? "Create Account" : "Welcome Back"}
            </h2>
            <p className="text-muted-foreground">
              {isSignUp 
                ? "Join Grandeur to unlock exclusive benefits and offers."
                : "Sign in to access your account and manage your bookings."
              }
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {isSignUp && (
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full pl-12 pr-12 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {!isSignUp && (
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-border text-accent focus:ring-accent" />
                  <span className="text-sm text-muted-foreground">Remember me</span>
                </label>
                <a href="#" className="text-sm text-accent hover:underline">
                  Forgot password?
                </a>
              </div>
            )}

            <Button variant="gold" size="xl" className="w-full gap-2">
              {isSignUp ? "Create Account" : "Sign In"}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-border" />
            <span className="text-sm text-muted-foreground">or continue with</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Social Login */}
          <div className="flex gap-4">
            <button className="flex-1 py-3 rounded-lg border border-border hover:bg-muted transition-colors flex items-center justify-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-sm font-medium">Google</span>
            </button>
            <button className="flex-1 py-3 rounded-lg border border-border hover:bg-muted transition-colors flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              <span className="text-sm font-medium">Facebook</span>
            </button>
          </div>

          {/* Toggle Sign Up / Sign In */}
          <p className="text-center mt-8 text-muted-foreground">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-accent font-medium hover:underline"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
