export default function TasksList({ text, ref, onDelete }) {
    let content

    if (text.length === 0 ) {
        content = <aside ref={ref} className="relative right-35 h-screen w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200 text-3xl relative bottom-2.5">Your Tasks</h2>
            <hr className="mb-5 relative bottom-6" />
            <h3 className="mb-3">Empty?</h3>
            <h3 className="mt-5">Be productive and add some tasks!</h3>
        </aside>
    }

    return (
        <>
            {!content ? <aside ref={ref} className="relative right-35 h-screen w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
                <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200 text-3xl relative bottom-2.5">Your Tasks</h2>
                <hr className="mb-5 relative bottom-6" />
                {text.map((txt) => (
                    <ul>
                        <li className="mb-5" key={txt}>
                            <p className="text-left">{txt}</p>
                            <button onClick={() => onDelete(txt)} className="relative left-20 bottom-7 bg-stone-900 text-white text-[10px] rounded-2xl hover:bg-white hover:text-black cursor-pointer border border-solid h-5 w-10">Done</button>
                            <hr className="relative bottom-3" />
                        </li>
                    </ul>
                ))}
            </aside> : content}
        </>
    )
}