function App() {
  return (
    <div className="dark flex h-screen w-full flex-col items-center gap-4 bg-background text-foreground">
      <div className="flex items-center justify-center gap-4 p-4">
        <span className="font-bold">
          agalarza
        </span>

        <img
          className="inline-block h-8 w-8 border-spacing-8 rounded-full border border-border"
          src="./images/a.webp"
          alt="agalarza"
        />
      </div>
      <div className="flex max-w-[55rem] flex-col items-center gap-2">
        <img
          src="./charts/rawgraph.svg"
          alt="rawgraph diagram"
          className="w-[55rem] rounded-md"
        />
        <div className="flex w-full flex-col gap-1">
          <span className="text-base text-foreground">
            Graph showing the relationship between budget and box office earning, grouped by genre, for the higest grossing movies in history.
          </span>
          <small className="text-sm text-muted-foreground">
            26 / 8 - Create from{' '}
            <a
              target="_blank"
              className="text-green-400 hover:cursor-pointer hover:underline"
              href="https://app.rawgraphs.io/"
            >
              RawGraphs
            </a>
          </small>
        </div>
      </div>
    </div>
  )
}

export default App
