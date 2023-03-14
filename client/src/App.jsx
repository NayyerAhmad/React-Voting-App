import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Navbar from "./components/Misc/Navbar";
import Home from "./pages/HomePage";
import Admin from "./pages/AdminPage";
import Guest from "./pages/GuestPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const theme = createTheme({
  palette: {
    primary: {
      main: "#1c2237",
      contrastText: "#fff",
    },
    secondary: {
      main: "#4CAF50",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar title="Voting App" />
        <Routes>
          <Route exact path="/" element={<Home title="Home" />} />
          <Route path="/Admin" element={<Admin title="Admin" />}
          />
          <Route path="/Guest" element={<Guest title="Guest" />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
