import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Layout from './components/UI/Layout'
import Home from './components/pages/Home'
import Vision from './components/pages/Vision'
import Contact from './components/pages/Contact'
import Partners from './components/pages/Partners'
import Portal from './components/pages/Portal'

import { paths } from './constants'

export default () =>
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route component={Home} exact path={paths.home}/>
        <Route component={Vision} path={paths.vision}/>
        <Route component={Partners} path={paths.partners}/>
        <Route component={Contact} path={paths.contact}/>
        <Route component={Portal} path={paths.portal}/>
        <Route component={Home} />
      </Switch>
    </Layout>
  </BrowserRouter>
