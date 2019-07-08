import React from 'react'
import BankEntryList from './components/BankEntryList'
import './App.scss'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Bank account tracker</h1>
      </header>
      <BankEntryList />
    </div>
  )
}

export default App
