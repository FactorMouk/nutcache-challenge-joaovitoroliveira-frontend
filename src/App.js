import "./App.scss";
import { Header } from "./components/Header/Header";
import { EmployeesTable } from "./components/EmployeesTable/EmployeesTable";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <EmployeesTable></EmployeesTable>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
