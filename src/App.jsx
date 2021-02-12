import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Layout from './components/UI/Layout'
import Home from './components/pages/Home'
import Vision from './components/pages/Vision'
import Contact from './components/pages/Contact'
import Portal from './components/pages/Portal'


import { paths } from './constants'

export default () =>
  <BrowserRouter>
    <Layout>
      <Route component={Home} exact path={paths.home}/>
      <Route component={Vision} path={paths.vision}/>
      <Route component={Contact} path={paths.contact}/>
      <Route component={Portal} path={paths.portal}/>
    </Layout>
  </BrowserRouter>
