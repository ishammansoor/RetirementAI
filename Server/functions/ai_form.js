const { GoogleGenerativeAI } = require("@google/generative-ai");
const path = require('path')

const image1 = path.join(__dirname, '../images/page-1.png');
const image2 = path.join(__dirname, '../images/page-2.png');

async function responseFromGPT(prompt) {
  // Initialize the Generative AI client with the API key
  const genAI = new GoogleGenerativeAI(
    "AIzaSyAtLL-q6vT_TbPXyYL8WwL2cG4juyDNeBQ"
  );

  // Define the system prompt
  const systemPrompt = `
You are an AI assistant specialized in analyzing tax forms. Please parse the following 1040 form content and extract relevant financial information, but **do not extract any personal identifiable information (PII)** such as:

- Names
- Social Security Numbers (SSN)
- Addresses
- Phone Numbers
- Bank Information
- Dependent Information

Focus solely on financial data like income amounts, deductions, credits, and other non-PII data.
`;

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });




  const result = await model.generateContent([prompt, image1, image2]);

  return result.response.text();
}

module.exports = {responseFromGPT}