import "./App.css";
import Header from "./components/Header";
import Project from "./pages/Project";
import ProjectManager from "./pages/ProjectManager";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Test from "./pages/Test";
import Todo from "./pages/Todo";
import { Provider } from "react-redux";
import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header></Header>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/project" element={<Project />}>
              {/* <Route path="2025" element={<div>Project 2025 Details</div>} />
              <Route path="2026" element={<div>Project 2026 Details</div>} /> */}
            </Route>
            <Route path="/project-manager" element={<ProjectManager />} />
            <Route path="/about" element={<About />} />
            <Route path="/test" element={<Test />} />
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
