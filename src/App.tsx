import { useState } from 'react'
import { MainLayout } from './components/layouts'
import { Navbar } from './components/ui'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MainLayout>
      <Navbar />
    </MainLayout>
  )
}

export default App
  