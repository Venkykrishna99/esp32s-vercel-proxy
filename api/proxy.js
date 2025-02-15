import axios from "axios";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed", message: "Only POST requests are allowed" });
    }

    try {
        const TARGET_URL = "http://electronova.infinityfreeapp.com/esp8266/save_data.php"; // Change this!

        const response = await axios.post(TARGET_URL, req.body, {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });

        return res.status(200).json(response.data);
    } catch (error) {
        console.error("Proxy Error:", error.message);
        return res.status(500).json({ error: "Failed to forward request", details: error.message });
    }
}
