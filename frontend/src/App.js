import { useMemo, useState } from 'react'
import './App.css'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeContext, themes } from './utils/ThemeContext'

// Pages
import Main from './pages/Main/Main'

// Components
import Header from './components/navigation/Header/Header'

function App() {
	const [theme, setTheme] = useState({
		theme: themes.dark
	})

	const themeValue = useMemo(() => ({ theme, setTheme }), [theme, setTheme])

	return (
		<div className="App">
			<ThemeContext.Provider value={themeValue}>
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
			</ThemeContext.Provider>
		</div>
	)
}

export default App
