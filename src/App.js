import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/provider";
import { Goals, Todo, Week, Weeks, Month, CurrentDay, ErrorPage } from "./pages";
import { NavbarDesk, Header, Sidebar, LayoutGrid, Overlay } from "./components";
import { ScheduleProvider } from "./context/scheduleContext";
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  // Will change month path!!!!!
  return (
    <>
      <AppProvider>
        <ScheduleProvider>
          <Router>
            <Overlay />
            <Sidebar />
            <LayoutGrid>
              <Header />
              <NavbarDesk />
              <Routes>
                <Route path="week" element={<Week />} />
                <Route path="/" element={<Month />} />
                <Route path="weeks" element={<Weeks />} />
                <Route path="currentday" element={<CurrentDay />} />
                <Route path="todo" element={<Todo />} />
                <Route path="goals" element={<Goals />} />
                <Route path="*" element={<ErrorPage/>}/>
              </Routes>
            </LayoutGrid>
          </Router>
          <ToastContainer position="top-center"/>
        </ScheduleProvider>
      </AppProvider>
    </>
  );
}

export default App;
