import { AppProvider } from "./components/context/AppContext";
import TabNav from "./components/tabNav/TabNav";
import "./App.css";

function App() {
  return (
    <div className="container mt-20 h-full ml-10">
      <AppProvider>
        <TabNav />
      </AppProvider>
    </div>
  );
}
export default App;
