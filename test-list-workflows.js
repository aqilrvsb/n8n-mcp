const fetch = require('node-fetch');

async function testListWorkflows() {
  try {
    const response = await fetch('http://localhost:3456/mcp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'tools/call',
        params: {
          name: 'list_workflows',
          arguments: {}
        },
        id: 1
      })
    });
    
    const data = await response.json();
    console.log('Response status:', response.status);
    console.log('Response data:', JSON.stringify(data, null, 2));
    
  } catch (error) {
    console.error('Error:', error);
  }
}

testListWorkflows();
