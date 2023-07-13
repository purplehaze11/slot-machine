import './App.css'
import Slots from './Slots'

function App() {
  return (
    <main className='bg-blue-200 py-6 w-3/5 h-4/5 mx-auto border-2 rounded-xl'>
      <h1 className='text-5xl font-bold'>Slot Machine</h1>
      <div className='flex flex-col items-center'>
        <Slots />
      </div>
    </main>
  )
}

export default App
