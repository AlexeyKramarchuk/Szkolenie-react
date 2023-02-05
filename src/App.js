import logo from './logo.svg';
import './App.css';
import First from "./components/Pierwszy/Pierwszy"
import Second from "./components/Drugi/Drugi"
import Fruits from './components/owoce/owoce';
import Przyklad from './components/Przyklad/Przyklad';
import Example from './components/Example/Example';
import Button from 'react-bootstrap/Button';
import Form from './components/Form/Form';


function App() {
  return (
    <div>
      <h1>React is Greate</h1>
      <p>React is beautiful</p>
      <Fruits />
      <Przyklad />
      <Example/>
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
      <Form/>
    </div>
  )
}

export default App;
