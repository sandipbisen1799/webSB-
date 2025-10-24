import {  BrowserRouter } from "react-router-dom";
import "./App.css";
import {  ApiProvider } from "./stores/ContextApi";
import AppContent from "./routes/Appcontent";


function App() {
  return (
    
      <BrowserRouter>
      <ApiProvider>
        <AppContent />
          </ApiProvider>
      </BrowserRouter>
  
  );
}

export default App;
