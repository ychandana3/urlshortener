const { StatusCodes } = require('http-status-codes');

const Url = require('./../models/urlModel');


const generateShortUrl = async (req, res) => {

    try {

        const { urlFromClient } = req.body;

        const isUrlAlreadyExists = await Url.findOne({ fullUrl: urlFromClient })

        if(isUrlAlreadyExists) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: 'short url of this website has already been generated',
            })
        }


        const generateShortUrl = await Url.create({ fullUrl: urlFromClient });

        res.status(StatusCodes.CREATED).json({
            success: true, 
            message: `short url of the link '${urlFromClient}' has been generated successfully`,
            data: {
                shortLink: `${req.protocol}://${req.headers.host}/${generateShortUrl.shortIdOfTheFullUrl}`
            }
        });
        
    } catch (error) {
        
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: error.message,
            data: null
        });

    }
};

const redirectToLongUrl = async (req, res) => {

    try {

        const findOriginalUrlById = await Url.findOne({ shortIdOfTheFullUrl: req.params.idOfTheShortUrl });

        res.redirect(findOriginalUrlById.fullUrl);
        
    } catch (error) {
        
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: error.message
        });

    }

};

const updateShortUrl = async (req, res) => {

    try {
    
        const { urlWhoseShortUrlIsToBeUpdated } = await req.body;

        await Url.findOneAndDelete({ fullUrl: urlWhoseShortUrlIsToBeUpdated });

        const generateShortUrl = await Url.create({ fullUrl: urlWhoseShortUrlIsToBeUpdated });

        res.status(StatusCodes.CREATED).json({
            success: true, 
            message: `short url of the link '${urlWhoseShortUrlIsToBeUpdated}' has been updated successfully`,
            data: {
                shortLink: `${req.protocol}://${req.headers.host}/${generateShortUrl.shortIdOfTheFullUrl}`
            }
        });
        

    } catch (error) {
        
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: error.message
        });

    }

}


module.exports = {
    generateShortUrl,
    redirectToLongUrl,
    updateShortUrl
}