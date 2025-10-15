export default async function handler(req, res) {
  const API_KEY = "c18dab8c3ams3ce3448a09c3cb8p176f7fjsncf7f76f3a7a2";
  const API_URL = "https://harem-altin-live-gold-price-data.p.rapidapi.com/harem_altin/prices";

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "harem-altin-live-gold-price-data.p.rapidapi.com"
    }
  };

  try {
    const response = await fetch(API_URL, options);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Veri çekilemedi", details: error.message });
  }
}
