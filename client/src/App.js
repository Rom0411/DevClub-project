import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import Footer from './components/Footer';
function App() {
  return (
    <div>
    <h1>Welcome to React!</h1>
    <Greeting />
    <Footer />
    <p>This is your first React component.</p>
  </div>
);
}
export default App;
