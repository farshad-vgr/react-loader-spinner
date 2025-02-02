import React from 'react'
import { Hourglass } from '../../src'
import { render, screen } from '@testing-library/react'

const svgTestId = 'hourglass-svg'

describe('Hourglass', () => {
  test('should render properly with default props', () => {
    render(<Hourglass />)
    const component = screen.getByTestId(svgTestId)
    expect(component).toBeDefined()
    expect(component).toHaveAttribute('aria-label', 'hourglass-loading')
    expect(component).toHaveAttribute('aria-busy', 'true')
    expect(component).toHaveAttribute('role', 'status')
    expect(component).toHaveAttribute('height', '80')
    expect(component).toHaveAttribute('width', '80')
  })

  test('should render with custom props', () => {
    render(
      <Hourglass
        height={200}
        width={200}
        ariaLabel="test-aria-label"
        wrapperClass="test-class"
        wrapperStyle={{ opacity: '1' }}
        colors={['red', 'blue']}
      />
    )
    const component = screen.getByTestId(svgTestId)
    expect(component).toBeDefined()
    expect(component).toHaveAttribute('aria-label', 'test-aria-label')
    expect(component).toHaveAttribute('aria-busy', 'true')
    expect(component).toHaveAttribute('role', 'status')
    expect(component).toHaveClass('test-class')
    expect(component).toHaveStyle('opacity: 1')
    expect(component).toHaveAttribute('height', '200')
    expect(component).toHaveAttribute('width', '200')
  })
  test('should be hidden when visible is false', () => {
    render(<Hourglass visible={false} />)
    const element = screen.queryAllByTestId(svgTestId)
    expect(element).toEqual([])
  })
})
