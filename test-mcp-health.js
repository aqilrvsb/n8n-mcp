const fetch = require('node-fetch');

async function testMCPHealth() {
  try {
    const response = await fetch('http://localhost:3456/health');
    const data = await response.json();
    console.log('Health check:', data);
    
    // Test a simple MCP call
    const mcpResponse = await fetch('http://localhost:3456/mcp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'tools/list',
        params: {},
        id: 1
      })
    });
    
    const mcpData = await mcpResponse.json();
    console.log('MCP tools list:', mcpData);
    
  } catch (error) {
    console.error('Error:', error);
  }
}

testMCPHealth();
