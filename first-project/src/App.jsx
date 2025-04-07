import { useRef, useState } from 'react'
import './App.css'
import AddingTask from './components/AddingTask'
import Header from './components/Header'
import NoTasks from './components/NoTasks'

function App() {

  const input = useRef()

  const [finalText, setFinalText] = useState([])

  function handleFinalText() {
    const taskData = input.current.value
    input.current.value = ''

    setFinalText([...finalText, taskData])
  }

  const onDelete = (txt) => {
    setFinalText((existingTask) => {
      return existingTask.filter((item) => item !== txt)
    })
  }

  const [addingTask, setAddingTask] = useState({
    active: undefined
  })

  function handleShowingComponent() {
    setAddingTask((prevState) => {
      return {
        ...prevState,
        active: null
      }
    })
  }

  let content

  if (addingTask.active === undefined) {
    content = <NoTasks adding={handleShowingComponent} />
  } else if (addingTask.active === null) {
    content = <AddingTask state={handleFinalText} inputRef={input} text={finalText} onDelete={onDelete} />
  } 

  let header

  if (addingTask.active !== null) {
    header = <Header />
  }

  return (
    <>
      {header}
      {content}
    </>
  )
}

export default App
