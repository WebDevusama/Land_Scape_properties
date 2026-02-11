import Navbar from "./components/ui/Navbar";
import AppRoutes from "../Routes/Routes";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
