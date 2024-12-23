import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout.js";
import Home from "./pages/Home.js";
import Blogs from "./pages/Blogs.js";
import Contact from "./pages/Contact.js";
import NoPage from "./pages/NoPages.js";

function App() {
 return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contacts" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
 );
}

export default App;