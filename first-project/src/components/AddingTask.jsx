import TasksList from "./TasksList";

export default function AddingTask({ state, inputRef, text, lst, onDelete }) {

    return (
        <div>
            <TasksList text={text} lst={lst} onDelete={onDelete} />
            <div className="flex flex-col relative bottom-120 w-[40rem] left-[17.5rem]">
                <label className="relative bottom-3 right-42.5 text-2xl">Task</label>
                <input className="w-100 mx-auto" type="text" ref={inputRef} />
                <button onClick={state} className="bg-stone-900 text-white rounded-2xl h-10 w-20 hover:bg-white hover:text-black cursor-pointer border border-solid relative left-110 mt-4">Add Task</button>
            </div>
        </div>
    )
}