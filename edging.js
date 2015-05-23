#!/usr/bin/env node

const workshopper = require('workshopper')
    , path        = require('path')

function fpath (f) {
  return path.join(__dirname, f)
}

workshopper({
      name        : 'learnyounode'
    , appDir      : __dirname
    , languages   : ['en']
    , helpFile    : fpath('./i18n/help/{lang}.txt')
  })
