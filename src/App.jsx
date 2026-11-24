import React from 'react'

export default function App() {
  return (
    <div className="site">
      <header className="site-header">
        <div className="container">
          <span className="wordmark">Grand Line</span>
        </div>
      </header>

      <main className="container site-main">
        <section className="hero" aria-labelledby="page-title">
          <h1 id="page-title">Bounty Board</h1>
          <p>Look up One Piece characters and their bounties.</p>
        </section>

        <section className="board" aria-labelledby="board-title">
          <h2 id="board-title">Wanted posters</h2>
          <div className="poster-grid" aria-hidden="true">
            <div className="poster-placeholder" />
            <div className="poster-placeholder" />
            <div className="poster-placeholder" />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">A One Piece fan project</div>
      </footer>
    </div>
  )
}
