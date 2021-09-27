import './App.css'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

// Pages
import Main from './pages/Main/Main'

// Components
import Header from './components/navigation/Header/Header'

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Main />
					</Route>
					<Route path="*">
						<p>404 - Not Found</p>
					</Route>
				</Switch>
			</Router>
		</div>
	)
}

export default App
