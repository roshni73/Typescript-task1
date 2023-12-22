
import './App.css'
import { createBrowserRouter,
        Route,
        RouterProvider,
        createRoutesFromElements
      } from 'react-router-dom';

import NavBar from './Components/NavBar'
import ToggleVisibility from './Components/ToggleVisibility'
import FormatDate from './Components/FormatData'
import StringManipulation from './Components/StringManipulation'
import TemperatureConvert from './Components/TemperatureConvert'
import FormattingNumber from './Components/FormattingNumber'
import ArrayManipulation from './Components/ArrayManipulation'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar/>}>
        <Route path="/ToggleVisibility" element={<ToggleVisibility/> }  />
        <Route path="/FormatDate" element={<FormatDate/>}  />
        <Route path="/StringManipulation" element={<StringManipulation/>}  />
        <Route path="/temperatureConvert" element={<TemperatureConvert/>}  />
        <Route path="/FormattingNumber" element={<FormattingNumber/>}  />
        <Route path="/ArrayManipulation" element={<ArrayManipulation/>}  />
    </Route>
  )
)

function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;
