"use strict";

var twilio = require('twilio');

const AccountSid = '[AccountSid]';
const AuthToken = '[AuthToken]';
const TO_PHONE_NUMBER = '[TO_PHONE_NUMBER]';
const FROM_PHONE_NUMBER = '[FROM_PHONE_NUMBER]';

var client = twilio(AccountSid, AuthToken);

async function sendMessage (to) {
  try {
    await client.sendMessage({
      to   : to,
      from : FROM_PHONE_NUMBER,
      body : 'Hello, there'
    });
    console.log('Message sent');
  } catch (error) {
    console.error(error);
  }
}

sendMessage(TO_PHONE_NUMBER);