import '@testing-library/jest-dom';

import {fireEvent,render, screen} from '@testing-library/react';
import React from 'react';

import IconSvg from './IconSvg';


describe('IconSvg', () => {
    it('應該正確渲染 svg 元素', () => {
        render(<IconSvg code="test" symbolsPath="/icons.svg" data-testid="icon-svg" />);
        const svg = screen.getByTestId('icon-svg');
        expect(svg.tagName.toLowerCase()).toBe('svg');
    });

    it('應該正確設置 xlinkHref', () => {
        render(<IconSvg code="test" symbolsPath="/icons.svg" data-testid="icon-svg" />);
        const useEl = screen.getByTestId('icon-svg').querySelector('use');
        expect(useEl).not.toBeNull();
        expect((useEl as Element)).toHaveAttribute('xlink:href', '/icons.svg#icon_test');
    });

    it('應該正確設置 color、size、rotate', () => {
        render(
            <IconSvg
                code="test"
                color="red"
                size={32}
                rotate={45}
                symbolsPath="/icons.svg"
                data-testid="icon-svg"
            />
        );
        const svg = screen.getByTestId('icon-svg');
        expect(svg as Element).toHaveAttribute('color', 'red');
        expect(svg as Element).toHaveStyle('--icon-rotate: 45deg');
        expect(svg as Element).toHaveAttribute('height', '32px');
    });

    it('應該觸發 onClick 事件', () => {
        const handleClick = jest.fn();
        render(<IconSvg code="test" onClick={handleClick} symbolsPath="/icons.svg" data-testid="icon-svg" />);
        const svg = screen.getByTestId('icon-svg');
        fireEvent.click(svg);
        expect(handleClick).toHaveBeenCalled();
    });

    it('應該根據 isRotateAnimation 設置 data-rotate-animation 屬性', () => {
        render(<IconSvg code="test" isRotateAnimation symbolsPath="/icons.svg" data-testid="icon-svg" />);
        const svg = screen.getByTestId('icon-svg');
        expect(svg as Element).toHaveAttribute('data-rotate-animation', '');
    });
}); 
