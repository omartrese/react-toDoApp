import './App.css'
import Form from './components/Form'

function App() {
  return (
    <>
      <div className='bg-gray-500 h-screen'>
        <header className='flex flex-col items-center p-10 text-center'>
          <h1 className='m-2 text-5xl'>Todo App</h1>
          <h2 className='text-2xl'>by Omar Layachi Mahboub</h2>
        </header>

        <Form />

        <footer className='hidden sm:absolute sm:flex w-full bottom-0 justify-around bg-gray-900 text-2xl p-2'>
          <h3>Todo App</h3>
          <h3>By Omar layachi</h3>
        </footer>
      </div>
    </>
  )
}

export default App
