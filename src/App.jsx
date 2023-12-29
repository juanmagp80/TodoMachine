import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Footer from './Components/Footer';
import './App.css'
import Layout from './Components/Layout';
import AddButton from './Components/AddButton';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout />
    <Footer />
    <AddButton />
    </>
  )
}
export default App
