// Router
"use strict";
const express = require('express');
const router = express.Router();
const bookmarkController = require("../controllers/bookmarkController");
const passport = require("../utils/passport");

router.get('/', bookmarkController.getBookmarks)
    .get('/:userId', bookmarkController.getBookmarksByUserId)
    .post('/:userId', bookmarkController.addBookmark)
    .delete('/:userId/:postId', bookmarkController.deleteBookmark);

module.exports = router;