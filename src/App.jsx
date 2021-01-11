import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './components/Home'
import Vision from './components/Vision'
import Contact from './components/Contact'
import Portal from './components/Portal'

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
