import './App.css'
import ComputeForm from './components/compute_form'
import ConvertForm from './components/convert_form'

function App() {


  return (
    <div className='min-h-screen bg-gray-100 p-8'>
      <h1 className="text-3xl font-bold text-center mb-8">Roman Numeral Converter</h1>
      <ConvertForm />
      <ComputeForm />
    </div>
  )
}

export default App
