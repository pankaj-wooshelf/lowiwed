import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from "@/common/AuthContext";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}