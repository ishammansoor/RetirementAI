const { GoogleGenerativeAI } = require("@google/generative-ai");
const path = require('path')

const image1 = path.join(__dirname, '../images/page-1.png');
const image2 = path.join(__dirname, '../images/page-2.png');

async function responseFromGPT(prompt) {
  const genAI = new GoogleGenerativeAI(
    "AIzaSyAtLL-q6vT_TbPXyYL8WwL2cG4juyDNeBQ"
  );

  const systemPrompt = `
    You are an AI assistant specialized in analyzing tax forms. given these financial information

    - Total Income: $100,000
    - House Hold Employee Wage: $1,000
    - Adjusted Gross income: $97,000
    - Taxable Income: $82,000
    - Deductions: $12,000
    - Tax Credit: $1,000
    - Retirement contributions: $6,000
    - capital gains and losses: $0
    - dependents and filing status: $10,000
    - health savings account and flexible spending accounts: 2,000
    - mortgage interests and property taxes: 10,000

    Given this question from the User ${prompt}

    Focus solely on financial data like income amounts, deductions, credits, and other non-PII data.
    Create a step to step plan on how to get financially stable

    limit the response to 100 words
`;

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const result = await model.generateContent([systemPrompt]);

  return result.response.text();
}

module.exports = {responseFromGPT}