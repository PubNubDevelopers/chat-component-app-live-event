const express = require('express');
const path = require('path');

module.exports = router => {
    router.use('/images', express.static(path.join(__dirname, '..', 'images')));
};