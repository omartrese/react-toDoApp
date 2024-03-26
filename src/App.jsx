import './App.css'
import TodoCrud from './components/TodoCrud'

function App() {
  return (
    <>
      <div>
        <header className='flex flex-col items-center p-8 text-center font-bold'>
          <h1 className='m-2 text-5xl'>Todo App</h1>
          <h2 className='text-2xl'>by Omar Layachi Mahboub</h2>
        </header>

        <TodoCrud />

        {/* <footer className='hidden sm:absolute sm:flex w-full bottom-0 justify-around bg-gray-900 text-2xl p-2'>
          <h3>Todo App</h3>
          <h3>By Omar layachi</h3>
        </footer> */}
      </div>
    </>
  )
}

export default App
