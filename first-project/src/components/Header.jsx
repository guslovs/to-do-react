import logo from '../assets/Microsoft_To-Do_icon.png'

export default function Header() {
    return (
        <header>
            <img className='w-28 h-28 mx-auto mt-7' src={logo} alt="Logo" />
            <h1 className='mt-12 text-7xl tracking-wide decoration-clone font-mono font-bold'>To Do List</h1>
        </header>
    )
}