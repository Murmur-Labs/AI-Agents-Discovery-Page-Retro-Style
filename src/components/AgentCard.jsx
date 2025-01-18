import React from 'react'
import './AgentCard.css'

function AgentCard({ agent }) {
  return (
    <div className="agent-card">
      <div className="card-image">
        <img src={agent.image} alt={agent.title} />
      </div>
      <div className="card-content">
        <h3>{agent.title}</h3>
        <p className="category">{agent.category}</p>
        <div className="tags">
          {agent.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <div className="rating">
          <span>⭐ {agent.rating}</span>
          <span>({agent.reviews} reviews)</span>
        </div>
        <p className="author">By: {agent.author}</p>
        <a href={agent.sourceUrl}>View Source</a>
        <div className="token-section">
          <span>{agent.tokens} Token(s)</span>
          <button>Sign in to use</button>
        </div>
      </div>
    </div>
  )
}

export default AgentCard
