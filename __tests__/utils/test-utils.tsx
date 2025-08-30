import { render, RenderOptions } from '@testing-library/react'
import { ReactElement } from 'react'

// Add any providers here if needed (e.g., ThemeProvider, Router, etc.)
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>
}

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
