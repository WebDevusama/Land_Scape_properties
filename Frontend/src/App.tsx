import Navbar from './pages/Navbar';
import { ThemeProvider } from "@/components//ui/theme-provider";

import AppRoutes from '../Routes/Routes';

function App() {
  return (
    <div>
      <Navbar />
      <AppRoutes />
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
    </div>
  );
}

export default App;
