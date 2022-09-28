const express = require('express')
const router = express.Router()

const userController = require("../controller/userController")
const bookController = require("../controller/bookController")
const middleware = require ("../middleware/middleware")
const reviewController = require("../controller/reviewController")

// ------------------------------------creating user------------------------------------
router.post("/register", userController.registerUser);


//-------------------------------------login user---------------------------------------
router.post("/login", userController.login);


// ------------------------------------creating books---------------------------------
router.post("/books", middleware.Authentication, middleware.Authorisation, bookController.createBook);


// --------------------------------------get books------------------------------------
router.get("/books", middleware.Authentication, bookController.getBooks);


// -------------------------------------get book by id---------------------------------
router.get("/books/:bookId", middleware.Authentication, middleware.Authorisation_2, bookController.getBookByPathParam);


// -------------------------------------updating book----------------------------------
router.put("/books/:bookId", middleware.Authentication, middleware.Authorisation_2 ,bookController.updateBooks);



// ---------------------------------------deleting book------------------------------------
router.delete("/books/:bookId", middleware.Authentication, middleware.Authorisation_2, bookController.deleteBook);






//***********************************  review ******************************************* */

// --------------------------------creating post----------------------------------------
router.post("/books/:bookId/review", reviewController.createReview)

// ------------------------------updating review------------------------------------------
router.put("/books/:bookId/review/:reviewId", reviewController.updateReview)

// ------------------------------delete review--------------------------------------------
router.delete("/books/:bookId/review/:reviewId", reviewController.deleteReview)




module.exports = router
