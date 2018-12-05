/* globals window */

import React from 'react'
import { Provider } from 'react-redux'
import { hydrate } from 'emotion'

import createStore from './src/store'

export const wrapRootElement = ({ element }) => {
  const store = createStore()
  const ConnectedRootElement = <Provider store={store}>{element}</Provider>
  return ConnectedRootElement
}

export const onClientEntry = () => {
  if (
    /* eslint-disable no-underscore-dangle */
    typeof window !== 'undefined' &&
    typeof window.__EMOTION_CRITICAL_CSS_IDS__ !== 'undefined'
  ) {
    hydrate(window.__EMOTION_CRITICAL_CSS_IDS__)
  }
}
