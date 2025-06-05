const axios = require('axios');

const N8N_HOST = 'https://n8n-production-790f.up.railway.app/api/v1';
const N8N_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmYzM2OTgxYS1kYzMxLTQ5MGMtYTI2NC1mNGViYWQ2YjRmNTAiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwiaWF0IjoxNzQ5MDkxMzA1fQ.aHpecrktCwExMSo1Q6tMHZ0iRssxPWiWSqLyasaFfPM';

async function testN8nConnection() {
  try {
    console.log('Testing connection to:', N8N_HOST);
    console.log('API Key:', N8N_API_KEY.substring(0, 20) + '...');
    
    const response = await axios.get(N8N_HOST + '/workflows', {
      headers: {
        'X-N8N-API-KEY': N8N_API_KEY,
        'Content-Type': 'application/json'
      }
    });
    
    console.log('Success! Status:', response.status);
    console.log('Response data:', response.data);
  } catch (error) {
    console.error('Error:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }
  }
}

testN8nConnection();
