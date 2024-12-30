import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Stage from "./pages/Stage Page/StagePage";
import Project from "./pages/Projectpage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/Stage" element={<Stage />} />
                <Route path="/Project" element={<Project />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
