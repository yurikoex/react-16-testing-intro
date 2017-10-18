import { App } from './index'
import React from 'react'
import { renderToString } from 'react-dom/server'

test('should render app', () => {
        expect(renderToString(<App />)).toMatchSnapshot()
})
