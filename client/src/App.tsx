import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Learning from "./pages/Learning";
import Skills from "./pages/Skills";
import Highlights from "./pages/Highlights";
import BucketList from "./pages/BucketList";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/learning"} component={Learning} />
      <Route path={"/skills"} component={Skills} />
      <Route path={"/highlights"} component={Highlights} />
      <Route path={"/bucket-list"} component={BucketList} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
