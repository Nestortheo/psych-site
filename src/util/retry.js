import { sendContact } from "../api/api";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const sendWithRetry = async (form) => {
  const MAX_TRIES = 4;

  for (let attempt = 1; attempt <= MAX_TRIES; attempt++) {
    try {
      return await sendContact(form);
    } catch (err) {

      if (attempt === MAX_TRIES) {
        throw err;
      }

      await sleep(1000 * attempt);
    }
  }
};