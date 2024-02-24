import sendRequest from "./send-request";
const BASE_URL = '/api/emails';

export async function sendEmail(newEmail) {
    return sendRequest(`${BASE_URL}/`, 'POST', {newEmail});
}
