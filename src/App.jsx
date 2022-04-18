import './styles/App.css'
import { Route } from 'wouter'
import Upload from './pages/Upload/Upload'
import Home from './pages/Home/Home'

const App = () => {
  return (
    <div className='App'>
      <main>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='/upload'>
          <Upload />
        </Route>
        {/* <Route path='/login'>
          <Login />
        </Route> */}
      </main>
    </div>
  )
}

export default App
