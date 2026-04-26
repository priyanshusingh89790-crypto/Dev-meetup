const cron = require('node-cron');
const News = require('../models/News');
const { processNewsWithGemini } = require('../services/gemini.service');

const fetchMockTechNews = async () => {
    // Simulating an external API fetch
    return [
        { title: "Apple announces new AI features", content: "Apple has deeply integrated ChatGPT and their own intelligence...", url: "http://example.com/apple", source: "TechCrunch" },
        { title: "Node.js 22 released", content: "Node 22 comes with require() support for ES modules...", url: "http://example.com/node", source: "Node Blog" },
        { title: "OpenAI launches GPT-5", content: "The newest model brings major enhancements to reasoning...", url: "http://example.com/gpt5", source: "OpenAI" },
        { title: "React 19 RC available", content: "React 19 brings the new compiler and use() hook...", url: "http://example.com/react", source: "React Blog" },
        // ... more mock data would go here
    ];
};

const runNewsJob = async () => {
    try {
        console.log("Running scheduled news fetch job...");
        
        const rawNews = await fetchMockTechNews();
        
        if (rawNews.length > 0) {
            const processedNews = await processNewsWithGemini(rawNews);
            
            if (processedNews && processedNews.length > 0) {
                // Clear old news (optional) or just insert new
                // await News.deleteMany({});
                
                await News.insertMany(processedNews);
                console.log(`Successfully saved ${processedNews.length} news items.`);
            }
        }
    } catch (error) {
        console.error("Error in news cron job:", error);
    }
};

// Run every 5 hours
cron.schedule('0 */5 * * *', runNewsJob);

// Optional: you can run it immediately on boot if you want
// runNewsJob();

module.exports = {
    runNewsJob
};
