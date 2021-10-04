import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { AuthProvider } from './components/AuthContext';
import { Main } from './components/Main/Main';
import { Nav } from './components/Nav/Nav';
import { TVapiState } from './context/tvapi/TVapiState';

function App() {
	return (
		<AuthProvider>
			<TVapiState>
				<BrowserRouter>
					<Nav />
					<Main>
						<AppRouter />
					</Main>
				</BrowserRouter>
			</TVapiState>
		</AuthProvider>
	);
}

export default App;
