import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
 
import Header from "./containers/Header/Header"
import Footer from "./containers/Footer/Footer"

import { Provider } from "react-redux"
import store from "./Redux/store"

const Main = lazy(() => import('./pages/Main/Main'))
const Market = lazy(() => import('./pages/Market/Market'))
const Sport = lazy(() => import('./pages/Sport/Sport'))
const Channels = lazy(() => import('./pages/Channels/Channels'))

const queryClient = new QueryClient()

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={
                <Suspense fallback={
                  <div className='loader'>
                    <span className="spinner"></span>
                  </div>}
                >
                  <Main />
                </Suspense>
              } />
              <Route path="/market" element={
                <Suspense fallback={<div className='loader'>
                  <span className="spinner"></span>
                </div>}>
                  <Market />
                </Suspense>
              } />
              <Route path="/sport" element={
                <Suspense fallback={<div className='loader'>
                  <span className="spinner"></span>
                </div>}>
                  <Sport />
                </Suspense>
              } />
              <Route path="/channels" element={
                <Suspense fallback={<div className='loader'>
                  <span className="spinner"></span>
                </div>}>
                  <Channels />
                </Suspense>
              } />
            </Routes>
            <Footer />
          </BrowserRouter>
        </Provider>
      </QueryClientProvider>
    </>
  )
}

export default App