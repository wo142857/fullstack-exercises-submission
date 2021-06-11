import React, { useState } from 'react'

const Headers = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const DataRow = (props) => {
  return (
    <div>
      {props.text} {props.value}
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Headers text='give Feedback'/>
      <button onClick={() => setGood(good+1)}>good</button>
      <button onClick={() => setNeutral(neutral+1)}>neutral</button>
      <button onClick={() => setBad(bad+1)}>bad</button>
      <Headers text='statistics'/>
      <DataRow text='good' value={good}/>
      <DataRow text='neutral' value={neutral}/>
      <DataRow text='bad' value={bad}/>
    </div>
  )
}

export default App