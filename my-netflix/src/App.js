import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { AuthProvider } from './components/AuthContext';
import { Main } from './components/Main/Main';
import { Nav } from './components/Nav/Nav';

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Nav />
				<Main>
					<AppRouter />
				</Main>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
