# Cypress Signup Automation — Vrit Technologies QA Task

This project automates the complete user signup process on [Authorized Partner](https://authorized-partner.vercel.app/) using Cypress.

## Prerequisites

Install the following before running the project:

- [Node.js](https://nodejs.org/) v18 or later
- npm (comes with Node.js)
- Mailosaur Account and API Key — [Sign up here](https://mailosaur.com/)

## Dependencies

Package (Purpose),
 Cypress (Automation framework),
cypress-xpath (XPath selector support),
 mailosaur (OTP email retrieval),
cypress-mochawesome-reporter  (Test reporting)

Install all dependencies by running
npm install

## Environment Setup

Create a '.env' file in the project root and add the following:
MAILOSAUR_API_KEY=your_api_key_here
MAILOSAUR_SERVER_ID=your_server_id_here

## How to Run the Script

**Headed Mode (opens browser):**
npx cypress open

**Headless Mode (runs in terminal):**
npx cypress run

## Framework Details

Item | Details,

Language | JavaScript,
Automation Framework | Cypress,
OTP Service | Mailosaur,
Selector Strategy | CSS Selectors and XPath,
Node.js Version | v18+,
Package Manager | npm 

## Test Data

The test uses dynamically generated data on each run:
- Username
- Email Address
- Phone Number

OTP verification is handled automatically using Mailosaur email services.

## Files Included

File | Description 
 Signup_automation_script.cy.js| Main automation test script 
README.md | Project documentation 
 Report.pdf | Test execution report
Demo_video.mp4([video link]([url](https://drive.google.com/file/d/1V_s1v3Q1c2UHN99XVsg-OzSjfvQXjbl0/view?usp=sharing)))| Demo video of automation run 

## Execution Flow

1. Open the website and navigate to Login → Sign Up
2. Accept the Terms of Service and Privacy Policy checkbox and click "Continue"
3. Fill in personal details and click "Next" — this triggers OTP generation for email verification
4. Retrieve OTP from Mailosaur inbox, enter it, and verify
5. Redirected to Agency Details page — fill in required details and click "Next"
6. Redirected to Professional Experience page — fill in details and click "Next"
7. Redirected to Verification and Preferences page — fill in details, upload required documents, and click "Submit"
8. After successful submission, redirected to the profile page

## Author

Saina Karki — QA Intern Task Round Submission
