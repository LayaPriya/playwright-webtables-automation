# Playwright WebTables Automation

This project demonstrates UI automation using Playwright on the DemoQA WebTables page

## Application Under Test
https://demoqa.com/webtables

## Tech Stack
- Playwright
- Javascript
- Node.js
- VS Code

## Test Scenarios Covered
- Add multiple users using external test data (JSON)
- Validate table rows and user details
- Verify age-based condition (> 36)
- Identify and delete the record with the highest salary
- Post-delete validation

## Setup Instructions
Clone the repository
git clone <repo-url>
Install dependencies
npm install

Install Playwright browsers
npx playwright install

Run Tests

Headless mode
npx playwright test

Headed mode
npx playwright test --headed

UI mode
npx playwright test --ui
