import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@app/App'
import AppThemeProvider from '@app/providers/AppThemeProvider/AppThemeProvider'
import "@app/assets/css/index.css"

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<AppThemeProvider>
			<App />
		</AppThemeProvider>
	</StrictMode>
)
