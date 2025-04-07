import image from '../assets/5607292.png'

export default function SecondNoTasks() {
    return (
        <div>
            <img className='mt-30 mb-5 w-8 mx-auto' src={image} alt="Paper Sheet" />
            <p className='mt-3 mb-3'>Click to add more tasks.</p>
            <button onClick={adding} className='mt-7.5 bg-stone-900 text-white rounded-2xl hover:bg-white hover:text-black cursor-pointer border border-solid h-10 w-20'>+ Add</button>
        </div>
    )
}