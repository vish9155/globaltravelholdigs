export async function getAccessToken() {
  let url = "https://test.api.amadeus.com/v1/security/oauth2/token";

  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: process.env.AMADEUS_API_KEY,
      client_secret: process.env.AMADEUS_API_SECRET,
    }),
  });

  let data = await response.json();
  console.log(data)
  return data.access_token;
}
