const path = require('path');
const express = require('express');

function setStaticPaths(app) {
	app.use('/public', express.static(path.join(__dirname, '..', '..', '/public')));
	app.use('/src', express.static(path.join(__dirname, '..', '..', '/client/src')));
	app.use('/img', express.static(path.join(__dirname, '..', '..', '/public/img')));
	app.use('/uploads', express.static(path.join(__dirname, '..', '/uploads')));
	
	app.use('/assets', express.static(path.join(__dirname, '../../client/src/assets')));
}

module.exports = setStaticPaths;
