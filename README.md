**Automation_task_from_Vrit_Technology**
Cypress Signup Automation

This project automates the user signup process using Cypress.

** Prerequisites**

Install the following before running the project:

* Node.js (v18 or later recommended)
* npm
* Cypress
* Mailosaur Account and API Key

**## Dependencies**

The project uses the following packages:
Key packages:

* Cypress
* xpath
* Mailosaur
* Mochawesome

***Environment Setup***

Create a '.env' file in the project root and add:
MAILOSAUR_API_KEY=your_api_key
MAILOSAUR_SERVER_ID=your_server_id

## How to Run the Script
Headed Mode:
npx cypress open
Headless Mode:
npx cypress run


**## Framework Details**
* Language: JavaScript
* Automation Framework: Cypress
* OTP Service: Mailosaur
* Selector Strategy: CSS Selectors and XPath
* Node.js Version: v18+
* Package Manager: npm


**## Test Data**
The test uses dynamically generated data:
* Username
* Email Address
* Phone Number

OTP verification is performed using Mailosaur email services.

## Files Included
* signup_automation_script.cy.js
* README.md
* report.pdf
* demo_video.mp4

## Execution Flow
1. Open the website and navigate to Login -> Sign Up
2. Accept the Terms of Service and Privacy Policy checkbox and click Continue
3. Fill in personal details and click Next (this triggers OTP generation for email verification)
4. Retrieve OTP from Mailosaur inbox, enter it, and verify
5. You will be redirected to the Agency Details page —> fill in the required details and click Next
6. You will be redirected to the Professional Experience page —> fill in the details and click Next
7. You will be redirected to the Verification and Preferences page —> fill in details, upload required documents, and click Submit
8. After successful submission, you will be redirected to the profile page
