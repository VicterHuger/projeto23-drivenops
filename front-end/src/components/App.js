import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from '../assets/styles/globalStyle';
import Home from '../pages/Home';
import StudentsList from '../pages/StudentsList';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/students' element={<StudentsList />} />
        </Routes>
      </Router>
    </>

  )

}

export default App;
