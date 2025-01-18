import React from 'react'
import AgentCard from './AgentCard'
import './AgentGrid.css'

const mockAgents = [
  {
    id: 1,
    title: "Pydantic AI Expert",
    category: "Programming",
    image: "https://placehold.co/400x300/252538/FFF",
    tags: ["Learning", "RAG"],
    rating: 4.7,
    reviews: 28,
    author: "Cole Medin",
    sourceUrl: "#",
    tokens: 1
  },
  {
    id: 2,
    title: "Pydantic AI GitHub",
    category: "Programming",
    image: "https://placehold.co/400x300/252538/FFF",
    tags: ["Learning", "Assistant"],
    rating: 4.6,
    reviews: 46,
    author: "Cole Medin",
    sourceUrl: "#",
    tokens: 1
  },
  {
    id: 3,
    title: "n8n GitHub Assistant",
    category: "Programming",
    image: "https://placehold.co/400x300/252538/FFF",
    tags: ["Assistant", "RAG"],
    rating: 4.7,
    reviews: 32,
    author: "Cole Medin",
    sourceUrl: "#",
    tokens: 1
  },
  {
    id: 4,
    title: "Pydantic AI Web Research",
    category: "Research & Analysis",
    image: "https://placehold.co/400x300/252538/FFF",
    tags: ["Web Research", "Task Automation"],
    rating: 4.5,
    reviews: 47,
    author: "Cole Medin",
    sourceUrl: "#",
    tokens: 1
  },
  {
    id: 5,
    title: "Advanced Web Researcher",
    category: "Research & Analysis",
    image: "https://placehold.co/400x300/252538/FFF",
    tags: ["Web Research", "Document Processing"],
    rating: 4.6,
    reviews: 39,
    author: "Cole Medin",
    sourceUrl: "#",
    tokens: 1
  },
  {
    id: 6,
    title: "LinkedIn/X/Blog Content",
    category: "Content Creation",
    image: "https://placehold.co/400x300/252538/FFF",
    tags: ["Content Writing", "Assistant"],
    rating: 4.8,
    reviews: 21,
    author: "Nate Herkelman",
    sourceUrl: "#",
    tokens: 1
  }
]

function AgentGrid() {
  return (
    <div className="agent-grid">
      {mockAgents.map(agent => (
        <AgentCard key={agent.id} agent={agent} />
      ))}
    </div>
  )
}

export default AgentGrid
