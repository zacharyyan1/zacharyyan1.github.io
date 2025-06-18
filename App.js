import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./App.css"; // Optional: for your own custom styles

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <header className="text-center py-12">
        <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Zach Yan
        </motion.h1>
        <motion.p
          className="text-xl mt-4 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Developer | Dreamer | Builder
        </motion.p>
      </header>

      <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-400">
            I'm a full-stack developer with a passion for building intuitive and dynamic user experiences.
            I love working with JavaScript, React, and anything that makes the web more engaging.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Projects</h2>
          <ul className="list-disc ml-5 text-gray-400 space-y-2">
            <li>Interactive AI-Powered Resume Builder</li>
            <li>Personal Finance Dashboard with ML predictions</li>
            <li>Collaborative Study Tool with GPT Integration</li>
          </ul>
        </motion.div>
      </section>

      <motion.footer
        className="text-center mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-gray-400 mb-4">Connect with me</p>
        <div className="flex justify-center space-x-6 text-2xl">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:zach@example.com">
            <FaEnvelope />
          </a>
        </div>
        <p className="text-gray-600 mt-6">© 2025 Zach Yan</p>
      </motion.footer>
    </main>
  );
}
