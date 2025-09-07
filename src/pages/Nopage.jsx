import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

// Default export: NoPage component (404 / Not Found)
// Tailwind CSS classes are used for styling (no imports required here).

export default function NoPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-4xl w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl"
        aria-labelledby="no-page-title"
        role="region"
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0 w-40 h-40 rounded-xl bg-white/6 flex items-center justify-center">
            {/* Stylized number */}
            <div className="text-center">
              <h2 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-300">
                404
              </h2>
              <p className="mt-1 text-sm text-white/70">Page not found</p>
            </div>
          </div>

          <div className="flex-1">
            <h1 id="no-page-title" className="text-2xl md:text-3xl font-semibold text-white">
              Oops — we can't find that page.
            </h1>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
              Check the URL for mistakes or return to the homepage.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/12 transition focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                <ArrowLeft size={16} />
                Go back
              </button>

              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-medium hover:opacity-95 transition focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                Home
              </button>

              <a
                href="/contact"
                className="ml-auto text-sm text-white/60 hover:text-white/80 underline"
              >
                Contact support
              </a>
            </div>

            <div className="mt-8 text-xs text-white/50">
              Tip: try searching from the top navigation or check your spelling.
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          transition={{ duration: 1, yoyo: Infinity }}
          className="pointer-events-none absolute inset-0"
          aria-hidden
        />
      </motion.div>

      {/* small footer note */}
      <div className="fixed bottom-6 left-6 text-xs text-white/40">Made with ❤️ — 404 page</div>
    </div>
  );
}
