const News = require('../models/News');

// Simple in-memory cache
let newsCache = {
    data: null,
    lastUpdate: null
};

exports.getLatestNews = async (req, res, next) => {
    try {
        // Cache logic (bonus)
        const ONE_HOUR = 60 * 60 * 1000;
        if (newsCache.data && newsCache.lastUpdate && (Date.now() - newsCache.lastUpdate < ONE_HOUR)) {
            return res.status(200).json({
                success: true,
                data: newsCache.data,
                cached: true
            });
        }

        const news = await News.find().sort({ createdAt: -1 }).limit(10);
        
        newsCache.data = news;
        newsCache.lastUpdate = Date.now();

        res.status(200).json({
            success: true,
            data: news,
            cached: false
        });
    } catch (error) {
        next(error);
    }
};
