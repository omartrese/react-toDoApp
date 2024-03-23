import './App.css'

function App() {
  return (
    <>
      <div className='bg-gray-500 h-screen'>
        <header className='flex flex-col items-center p-10'>
          <h1 className='m-2'>Todo App</h1>
          <h2>by Omar Layachi Mahboub</h2>
        </header>


        <toDo />

        <footer className='hidden sm:w-full sm:bottom-0 sm:flex sm:justify-around bg-gray-900 text-2xl p-2  sm:absolute'>
          <h3>Todo App</h3>
          <h3>By Omar layachi</h3>
        </footer>
      </div>
    </>
  )
}

export default App
