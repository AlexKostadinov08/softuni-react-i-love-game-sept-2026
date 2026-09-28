const url = "https://ksgplocuzipzxwcwrcft.supabase.co/rest/v1/";
const apiKey = "sb_publishable_cqpHvg5_ITmhi04ql5umXg_fPGFOVhE";

export default async function request(path = "/", method = "GET", body = null) {
    const options = {
        headers: {
            apiKey,
        }
    };

    if (method !== "GET") {
        options.method = method;
    }

    if (data) {
        options.headers["Content-Type"] = "applications/json";
        options.body = JSON.stringify(data);
    }

    const response = await fetch(`${url}${path}`, options)

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
}