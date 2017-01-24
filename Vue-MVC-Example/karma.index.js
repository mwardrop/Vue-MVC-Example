// Polyfill fn.bind() for PhantomJS
/* eslint-disable no-extend-native */
Function.prototype.bind = require('function-bind')

// Register our component tests
const ComponentTestContext = require.context('./Components/Tests/Unit', true, /\.test$/)
ComponentTestContext.keys().forEach(ComponentTestContext)

// Register our view tests
const ViewtTestContext = require.context('./Scripts/Views/Tests/Unit', true, /\.test$/)
ViewtTestContext.keys().forEach(ViewtTestContext)

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
//const srcContext = require.context('src', true, /^\.\/(?!main(\.js)?$)/)
//srcContext.keys().forEach(srcContext)
