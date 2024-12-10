import { Box } from "@chakra-ui/react"
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Box bg={('white')}>
        <Routes>
          <Route path= '/' element= {<Homepage />} />
        </Routes>
      </Box>
    </>
  )
}

export default App
