const express = require('express');
const path = require('path');

module.exports = router => {
    console.log("aha");
    router.use('/images', express.static(path.join(__dirname, '..', 'images')));
};