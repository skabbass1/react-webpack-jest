/**
 * Created by sabbas on 6/6/17.
 *
 * This module is run before each test to setup the test environment.
 * If you are using webpack's provider plugin to automatically load modules
 * (such as as React, ReactDOM or Jquery) instead of importing them every where, use this file to
 * to assign these modules to the window object for them to be available to the code
 * being tested
 */
import React from 'react'

window.React = React