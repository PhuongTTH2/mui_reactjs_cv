import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import RootProvider from 'contexts/RootProvider'
import { client } from 'api/apolloClient'
import { ApolloProvider } from '@apollo/client'
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RootProvider>
        <App />
      </RootProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
