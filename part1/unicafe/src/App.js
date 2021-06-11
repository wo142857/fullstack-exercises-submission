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
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const allCalcu = (n) => {
    console.log(good, neutral, bad)
    setAll(good + neutral + bad + 1)
    setAverage(good+ neutral * 0.5  - bad + n)

    function toPercent(num, total) { 
      return (Math.round(num / total * 10000) / 100.00 + "%")
    }

    let goodn = good
    let alln = good + neutral + bad + 1
    if (n === 1) {
      goodn = goodn + 1
    }
    setPositive(toPercent(goodn, alln))
  }

  const goodHandle = () => {
    setGood(good + 1)
    allCalcu(1)
  }

  const neutralHandle = () => {
    setNeutral(neutral + 1)
    allCalcu(0.5)
  }

  const badHandle = () => {
    setBad(bad + 1)
    allCalcu(-1)
  }

  return (
    <div>
      <Headers text='give Feedback'/>
      <button onClick={goodHandle}>good</button>
      <button onClick={neutralHandle}>neutral</button>
      <button onClick={badHandle}>bad</button>
      <Headers text='statistics'/>
      <DataRow text='good' value={good}/>
      <DataRow text='neutral' value={neutral}/>
      <DataRow text='bad' value={bad}/>
      <DataRow text='all' value={all}/>
      <DataRow text='average' value={average}/>
      <DataRow text='positive' value={positive}/>
    </div>
  )
}

export default App