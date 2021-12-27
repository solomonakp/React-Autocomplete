import Autocomplete from 'components/elements/AutoComplete'

function App() {
  return (
    <main className="app">
      <header>
        <h1>React Auto-Complete</h1>
      </header>
      <Autocomplete
        suggestions={[
          'Mango',
          'Orange',
          'Banana',
          'Water melon',
          'Grape',
          'Pineapple',
        ]}
      />
    </main>
  )
}

export default App
