"use strict";

var router = require('express').Router();

var express = require('express');

var app = express();

var data_structures = require('../models/db');

var handler = require('./handler');


router.get('/', handler.welcome);
router.post('/api/v1/auth/signup', handler.register);
router.post('/api/v1/auth/login', handler.login);
router.get('/api/v1/messages', handler.getAllMessages);
router.post('/api/v1/messages', handler.sendMessage);
router.get('/api/v1/messages/sent', handler.getSent);
router.get('/api/v1/message/:id', handler.getOneMessage);
router.get('/api/v1/users', handler.users);
router.get('/api/v1/users/:id', handler.user);
router.get('/api/v1/messages/unread', handler.unread);
router.get('/api/v1/messages/unread/:id', handler.oneUnread);
router.get('/api/v1/messages/read', handler.read);
router.get('/api/v1/messages/read/:id', handler.oneRead);
router.delete('/api/v1/messages/:id', handler.deleteOne);
module.exports = router;