const router = require('express').Router();

const { generateShortUrl, redirectToLongUrl, updateShortUrl } = require('../controllers/urlControllers');


router.post('/generate-short-url', generateShortUrl);

router.get('/:idOfTheShortUrl', redirectToLongUrl);

router.post('/update-short-url', updateShortUrl)


module.exports = router;