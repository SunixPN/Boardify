import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@app/App'
import "@app/assets/css/index.css"
import AppThemeProvider from '@app/providers/AppThemeProvider/AppThemeProvider'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<AppThemeProvider>
			<App />
		</AppThemeProvider>
	</StrictMode>
)
