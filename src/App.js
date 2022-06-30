import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { AppProvider } from "./context/provider";
import { Goals, Todo, Week, Weeks, Month, CurrentDay } from "./pages";
import { NavbarDesk, Header, Sidebar, LayoutGrid} from "./components";

function App() {
  // Will change month path!!!!!
  // Maybe add container grid div
  return (
    <>
    <AppProvider>
      <Router>
          <Sidebar />
        <LayoutGrid>
          <Header />
          <NavbarDesk/>
          <Routes>
            <Route path="week" element={<Week />} />
            <Route path="/" element={<Month />} /> 
            <Route path="weeks" element={<Weeks />} />
            <Route path="currentday" element={<CurrentDay />} />
            <Route path="todo" element={<Todo />} />
            <Route path="goals" element={<Goals />} />
          </Routes>
        </LayoutGrid>
      </Router>
    </AppProvider>
    </>
  );
}

export default App;
