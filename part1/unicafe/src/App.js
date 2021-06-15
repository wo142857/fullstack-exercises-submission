import React, { useState } from 'react'

const Headers = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const Statistics = (props) => {
  if (props.data.all === 0) {
    return (
      <div>
        <Headers text='statistics'/>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <Headers text='statistics'/>
      <table>
        <tbody>
          <tr>
            <td>good</td>
            <td>{props.data.good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{props.data.neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{props.data.bad}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{props.data.all}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{props.data.average}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{props.data.positive}</td>
          </tr>
        </tbody>
      </table>
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

  const data = {
    'good': good,
    'neutral': neutral,
    'bad': bad,
    'all': all,
    'average': average,
    'positive': positive
  }

  return (
    <div>
      <Headers text='give Feedback'/>
      <button onClick={goodHandle}>good</button>
      <button onClick={neutralHandle}>neutral</button>
      <button onClick={badHandle}>bad</button>
      <Statistics data={data}/>
    </div>
  )
}

export default App