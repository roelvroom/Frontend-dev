import Exercise from './Exercise/Exercise'
import ExerciseSix from './ExerciseSix/ExerciseSix'
import ExerciseSeven from './ExerciseSeven/ExerciseSeven'
import ExerciseEight from './ExerciseEight/ExerciseEight'

function App() {

  return (
    <>
      <Exercise title='Exercise 6: Calculator'>
        <ExerciseSix/>
      </Exercise>
      <Exercise title='Exercise 7: BMI Calculator'>
        <ExerciseSeven/>
      </Exercise>
      <Exercise title='Exercise 8:'>
        <ExerciseEight/>
      </Exercise>
      <Exercise title='Exercise 9:'>
        
      </Exercise>
    </>
  )
}

export default App
