import {Component} from 'react';
import TextTwo from './components/TaskTwo/TaskTwo';
import TaskOne from './components/TaskOne/TaskOne';

import { BrowserRouter , Route , Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<TextTwo/>}/>
            <Route path='/web' element={<TaskOne/>}/>
          </Routes>
      </BrowserRouter>
      </>
    );
  }
}
export default App;