import "../styles/globals.css";

//Internal Import
import { NavBar, Footer } from "../components/componentsindex";

const App = ({ Component, pageProps }) => (
  <div>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
  </div>
);

export default App
