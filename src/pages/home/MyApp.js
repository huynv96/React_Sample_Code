import { useState } from "react";
import Form from "../../components/Form";
import { ThemeProvider } from "../../context/ThemeContext";
const MyApp = () => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeProvider value={theme}>
      <Form />
      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={(e) => {
            setTheme(e.target.checked ? "dark" : "light");
          }}
        />
        Use dark mode
      </label>
    </ThemeProvider>
  );
};

export default MyApp;
