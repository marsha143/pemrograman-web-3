import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import HalamanJsx from './HalamanJsx.jsx'
import Button from './Button.jsx'
import Input from './Input.jsx'
import NamaLengkap from './NamaLengkap.jsx'
import LoginForm from './TugasPertemuan5/LoginForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <HalamanJsx /> */}
    {/* <Button /> */}
    {/* <Input/> */}
    {/* <NamaLengkap/> */}
    <LoginForm/>
  </StrictMode>,
)
