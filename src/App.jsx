import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "@/Components/chat/Chat";


function App() {


  return (
    <>
      <div className="app">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Chat />} />
        </Routes>
        </BrowserRouter>

      </div>
      
    </>
  )
}

export default App;
