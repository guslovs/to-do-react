import { useState } from "react"
import AddingTask from "./AddingTask"
import TasksList from "./TasksList"

export default function Button({  }) {
    const [returnComponent, setReturnComponent] = useState(false)

    function handleComponent() {
        setReturnComponent(true)
    }

    return (
        <>
            {!returnComponent
             ? <button onClick={handleComponent} className="mt-10 mb-5 relative right-150 bg-stone-900 text-white rounded-2xl h-10 w-22 hover:bg-white hover:text-black cursor-pointer border border-solid">+ Add Task</button>
             : <AddingTask />}
        </>
    )
}