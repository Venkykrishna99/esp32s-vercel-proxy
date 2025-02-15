import axios from "axios";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    try {
        const TARGET_URL = "http://electronova.42web.io/esp8266/save_data.php"; // Update this!

        const response = await axios.post(TARGET_URL, req.body, {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });

        return res.status(200).json(response.data);
    } catch (error) {
        console.error("Proxy Error:", error.message);
        return res.status(500).json({ error: "Failed to forward request", details: error.message });
    }
}
