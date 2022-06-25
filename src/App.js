import { Goals, Todo, Week, Weeks, Month, CurrentDay } from "./pages";
import { Navbar, Header, Sidebar } from "./components";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <h1>App</h1>
      <Goals />
      <Todo />
      <Week />
      <Weeks />
      <Month />
      <CurrentDay />
    </>
  );
}

export default App;
