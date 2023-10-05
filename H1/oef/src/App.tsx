import Exercise from './Exercise/Exercise.tsx'
import ExerciseOne from './ExerciseOne/ExerciseOne.tsx'
import ExerciseTwo from './ExerciseTwo/ExerciseTwo.tsx'
import ExerciseThree from './ExerciseThree/ExerciseThree.tsx'
import ExerciseFour from './ExerciseFour/ExerciseFour.tsx'
import ExerciseFive from './ExerciseFive/ExerciseFive.tsx'

function App() {

  return (
    <>
        <Exercise title={'Exercise 1: Multiplication table'}>
            <ExerciseOne/>
        </Exercise>
        <Exercise title={'Exercise 2: Rater'} background={'#77EEEE'}>
            <ExerciseTwo/>
        </Exercise>
        <Exercise title={'Exercise 3: Progressbar'}>
            <ExerciseThree/>
        </Exercise>
        <Exercise title={'Exercise 4: Number grid'} background={'#77EEEE'}>
            <ExerciseFour/>
        </Exercise>
        <Exercise title={'Exercise 5: Comment card'}>
            <ExerciseFive/>
        </Exercise>
    </>
  )
}

export default App
