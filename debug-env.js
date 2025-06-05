// Quick debug script to check environment variables
require('dotenv').config();

console.log('N8N_HOST:', process.env.N8N_HOST);
console.log('N8N_API_KEY:', process.env.N8N_API_KEY ? process.env.N8N_API_KEY.substring(0, 20) + '...' : 'undefined');
console.log('Working directory:', process.cwd());
console.log('Environment variables starting with N8N:');
Object.keys(process.env).filter(key => key.startsWith('N8N')).forEach(key => {
  console.log(`  ${key}: ${process.env[key]}`);
});
