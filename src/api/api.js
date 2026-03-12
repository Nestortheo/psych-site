import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://127.0.0.1:8000",
  timeout: 20000,
});

export async function sendContact(form) {
  const res = await api.post("/api/contact/", form);
  return res.data;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const sendWithRetry = async (form) => {
  const MAX_TRIES = 4;

  for (let attempt = 1; attempt <= MAX_TRIES; attempt++) {
    try {
      return await sendContact(form);
    } catch (err) {

      if (attempt === MAX_TRIES) {
        throw err;
      }

      // exponential-ish backoff
      await sleep(1000 * attempt);
    }
  }
};