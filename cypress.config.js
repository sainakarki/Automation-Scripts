const { defineConfig } = require("cypress");
const MailosaurClient = require("mailosaur");
require("dotenv").config();

const client = new MailosaurClient(process.env.MAILOSAUR_API_KEY);

async function getOtp(email) {
  const serverId = process.env.MAILOSAUR_SERVER_ID;

  if (!email) {
    throw new Error("Email is required for getOtp task");
  }

  const message = await client.messages.get(serverId, {
    sentTo: email,
  });

  const body =
    message.text?.body ||
    message.html?.body ||
    JSON.stringify(message.text || message.html || "");

  const match = body.match(/\d{6}/);

  if (!match) {
    throw new Error("OTP not found in email body");
  }

  return match[0];
}

module.exports = defineConfig({
  reporter: "mochawesome", 
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: true,
    html: true,
    json: true
  },

  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        getOtp,
      });

      return config;
    },
  },
});