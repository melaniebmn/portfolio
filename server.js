import express from 'express';
import path from 'path';
import compression from 'compression';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './app/routes';

var app = express()

app.use(compression())

app.use(express.static(path.join(__dirname, 'public'), {index: false}))

app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      const appHtml = renderToString(<RouterContext {...props}/>)
      res.send(renderPage(appHtml))
    } else {
      res.status(404).send('Not Found')
    }
  })
})

function renderPage(appHtml) {
  return `
    <!doctype html public="storage">
    <html>
      <meta charset="UTF-8">
      <title>Portfolio | Melanie Bockmann Test</title>
      <meta name="description" content="Hey, my name is Melanie, I'm a Front-End Developer based in Vancouver, BC. This porfolio sites showcases some of my work." />
      <meta name="keywords" content="melanie bockmann, front-end developer, web development vancouver, front-end vancouver, frontend vancouver" />

      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" type="text/css" href="assets/css/style.css">
      <link rel="stylesheet" type="text/css" href="style.css">
      
      <div id=app>${appHtml}</div>
      <script src="bundle.js"></script>
   `
}

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})