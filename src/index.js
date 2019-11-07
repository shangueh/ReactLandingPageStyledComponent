import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/NavBar'
import Content from './components/Content'

const App = () => {
  return (
    <>
      <NavBar />
      <Content />
    </>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
