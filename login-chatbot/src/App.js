import './App.css';
import Header from './pages/Header.jsx';
import Sidebar from './pages/Sidebar.jsx';
import Footer from './pages/Footer.jsx';
import Content from './pages/Content.jsx';
import Navbar from './pages/Navbar.jsx';

function App() {
  return (
      <div class="row">
        <Header />
        <Navbar />
        <Sidebar />
        <Content />
        <Footer />
      </div>
  );
}

export default App;