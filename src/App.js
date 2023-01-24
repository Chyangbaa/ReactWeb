import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from"./pages/Dashboard";
import Users from"./pages/Users";
import Messages from "./pages/Messages";
import FileManager from"./pages/FileManager";
import Analytics from "./pages/Analytics";
import Project from"./pages/Project";
import Saved from"./pages/Saved";
import Setting from "./pages/Setting";
import Sidebar from "./components/Sidebar";

function App() {
  return(
  <>
    <Router>
      <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/messages" element={<Messages/>} />
        <Route path="/analytics" element={<Analytics/>} />
        <Route path="/file-manager" element={<FileManager/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/messages" element={<Messages/>} />
        <Route path="/setting" element={<Setting/>} />
        <Route path="/saved" element={<Saved/>} />
        <Route path="*" element={<> not found</>} />
      </Routes>
      </Sidebar>
    </Router>
  </>
  );
    
}

export default App;
