
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.exercise}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    part: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Part name={course.part[0].name} exercise={course.part[0].exercises}/>
      <Part name={course.part[1].name} exercise={course.part[1].exercises}/>
      <Part name={course.part[2].name} exercise={course.part[2].exercises}/>
    </div>
  )
}

export default App;
