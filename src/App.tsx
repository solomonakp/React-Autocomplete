import Autocomplete from 'components/elements/AutoComplete'

function App() {
  return (
    <main className="app">
      <header>
        <h1>React Auto-Complete</h1>
      </header>
      <Autocomplete
        suggestions={['White', 'Black', 'Green', 'Blue', 'Yellow', 'Red']}
      />
    </main>
  )
}

export default App
