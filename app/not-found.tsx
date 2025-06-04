"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Home, ArrowLeft, Sparkles } from "lucide-react";

export default function NotFound() {
  const [pawAnimation, setPawAnimation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPawAnimation((prev) => (prev + 1) % 4);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated Construction Dog */}
        <div className="relative mb-8">
          <div className="inline-block relative">
            {/* Dog SVG with construction theme */}
            <svg
              width="300"
              height="250"
              viewBox="0 0 300 250"
              className="mx-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Dog body */}
              <g className="animate-bounce" style={{ animationDuration: "3s" }}>
                {/* Main body */}
                <ellipse cx="150" cy="150" rx="80" ry="60" fill="#4F8EF7" stroke="#2563eb" strokeWidth="3" />
                
                {/* Head */}
                <circle cx="100" cy="120" r="40" fill="#4F8EF7" stroke="#2563eb" strokeWidth="3" />
                
                {/* Ears */}
                <path d="M 80 100 Q 70 80 85 90" fill="#3b82f6" stroke="#2563eb" strokeWidth="2" />
                <path d="M 120 100 Q 130 80 115 90" fill="#3b82f6" stroke="#2563eb" strokeWidth="2" />
                
                {/* Eyes */}
                <circle cx="90" cy="115" r="3" fill="#1e40af" />
                <circle cx="110" cy="115" r="3" fill="#1e40af" />
                
                {/* Nose */}
                <ellipse cx="100" cy="130" rx="8" ry="6" fill="#1e40af" />
                
                {/* Tail */}
                <path 
                  d="M 220 140 Q 250 120 240 160" 
                  fill="none" 
                  stroke="#2563eb" 
                  strokeWidth="15" 
                  strokeLinecap="round"
                  className="animate-pulse"
                />
                
                {/* Construction patches */}
                <rect x="120" y="140" width="20" height="25" fill="#10b981" opacity="0.8" />
                <rect x="140" y="130" width="25" height="20" fill="#8b5cf6" opacity="0.8" />
                <rect x="165" y="140" width="20" height="30" fill="#f59e0b" opacity="0.8" />
                <rect x="110" y="160" width="30" height="20" fill="#ef4444" opacity="0.8" />
                
                {/* Paw print on body */}
                <g transform="translate(150, 155)">
                  <ellipse cx="0" cy="0" rx="15" ry="12" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
                  <circle cx="-8" cy="-10" r="5" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1" />
                  <circle cx="8" cy="-10" r="5" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1" />
                  <circle cx="0" cy="-15" r="5" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1" />
                </g>
                
                {/* Legs */}
                <rect x="85" y="180" width="15" height="40" rx="7" fill="#3b82f6" stroke="#2563eb" strokeWidth="2" />
                <rect x="115" y="180" width="15" height="40" rx="7" fill="#3b82f6" stroke="#2563eb" strokeWidth="2" />
                <rect x="155" y="180" width="15" height="40" rx="7" fill="#3b82f6" stroke="#2563eb" strokeWidth="2" />
                <rect x="185" y="180" width="15" height="40" rx="7" fill="#3b82f6" stroke="#2563eb" strokeWidth="2" />
              </g>
              
              {/* Construction hat */}
              <g transform="translate(100, 90)">
                <path d="M -20 0 L 20 0 L 15 -15 L -15 -15 Z" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
                <rect x="-25" y="-2" width="50" height="4" fill="#d97706" />
              </g>
            </svg>
            
            {/* Animated paw prints walking */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-4">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`transition-opacity duration-300 ${
                      pawAnimation === i ? "opacity-100" : "opacity-30"
                    }`}
                  >                    <Sparkles className="w-6 h-6 text-blue-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Under Construction
        </h1>
        
        <p className="text-xl text-gray-600 mb-2">
          Woof! This page is being built by our AI pup 🐾
        </p>
        
        <p className="text-lg text-gray-500 mb-8">
          Our three-legged friend is working hard to fetch this content for you!
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <Home className="w-5 h-5" />
            Go to Homepage
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        {/* Fun facts while waiting */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Did you know? 🤔
          </h3>
          <p className="text-gray-600">
            Triepod.AI is named after our resilient three-legged mascot, 
            symbolizing how we help people overcome challenges with innovative AI solutions!
          </p>
        </div>
      </div>
    </div>
  );
}