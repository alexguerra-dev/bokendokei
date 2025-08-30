// __tests__/app/page.test.tsx
import { render, screen } from '@/__tests__/utils/test-utils'
import Home from '@/app/page'

describe('Home Page', () => {
    it('renders the title correctly', () => {
        render(<Home />)
        expect(
            screen.getByRole('heading', { name: /bōkendokei/i }),
        ).toBeInTheDocument()
    })

    it('has the correct heading level', () => {
        render(<Home />)
        const heading = screen.getByRole('heading', { name: /bōkendokei/i })
        expect(heading.tagName).toBe('H1')
    })
})
