import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle></ModeToggle>
      <Button>Test</Button>
    </ThemeProvider>
  );
}

export default App;
