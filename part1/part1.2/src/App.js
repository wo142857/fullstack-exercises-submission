
const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.exercise}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Part name="Fundamentals of React" exercise="10"/>
      <Part name="Using props to pass data" exercise="7"/>
      <Part name="State of a component" exercise="14"/>
    </div>
  )
}

export default App;
