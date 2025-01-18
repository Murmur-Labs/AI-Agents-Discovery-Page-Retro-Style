import React from 'react'
import Header from './components/Header'
import AgentGrid from './components/AgentGrid'
import SearchBar from './components/SearchBar'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <h1>Discover AI Agents</h1>
        <p className="subtitle">
          Explore cutting-edge AI agents curated and hosted by oTTomator, AND learn how to implement them yourself!
        </p>
        <div className="sponsors">
          <p>Special Thanks to our Hackathon Sponsors:</p>
          <div className="sponsor-logo">
            <img src="/openrouter-logo.png" alt="OpenRouter" />
          </div>
        </div>
        <SearchBar />
        <AgentGrid />
      </main>
      <footer>
        <p>© 2025 Live Agent Studio. All rights reserved.</p>
        <p>Created by oTTomator</p>
        <a href="#">View All Agents on GitHub</a>
      </footer>
    </div>
  )
}

export default App
