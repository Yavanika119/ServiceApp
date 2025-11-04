import ThemeProvider from "../../src/context/ThemeContext";
import AuthProvider from "../../src/context/AuthContext";

export default function Layout({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
}
