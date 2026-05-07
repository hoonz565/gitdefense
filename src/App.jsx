import React from 'react'
import GitDefenseBoard from './components/GitDefenseBoard'
import GitDefenseWidget from './components/GitDefenseWidget'

function App() {
  // Check if this is an embed route
  const isEmbed = window.location.pathname.startsWith('/embed/')

  if (isEmbed) {
    return <GitDefenseWidget />
  }

  return (
    <div className="app-container">
      <GitDefenseBoard />
    </div>
  )
}

export default App
