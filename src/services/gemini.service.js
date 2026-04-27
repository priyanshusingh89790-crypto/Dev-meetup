const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.processNewsWithGemini = async (newsList) => {
    try {
        const apiKey = process.env.GEMINI_API_KEY;
        const genAI = new GoogleGenerativeAI(apiKey);
        
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `Given the following list of tech news, select the top 10 most important and summarize each in EXACTLY 2 lines. 
Respond in strict JSON format as an array of objects. 
Each object must have the following keys: "title", "summary", "source", "url", "image".
Ensure "summary" is 2 lines max.

Here is the raw news data:
${JSON.stringify(newsList)}
`;

        const result = await model.generateContent(prompt);
        const responseText = result.response.text();
        
        // Strip markdown backticks if present
        const jsonMatch = responseText.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
            return JSON.parse(jsonMatch[0]);
        }

        return JSON.parse(responseText);
    } catch (error) {
        console.error("Gemini AI Processing Error:", error);
        return [];
    }
};
