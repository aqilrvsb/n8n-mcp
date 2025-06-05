const fetch = require('node-fetch');

async function createAqilWorkflow() {
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
          name: 'create_workflow',
          arguments: {
            name: 'aqil',
            nodes: [
              {
                id: 'ManualTrigger',
                name: 'Manual Trigger',
                type: 'n8n-nodes-base.manualTrigger',
                typeVersion: 1,
                position: [0, 0],
                parameters: {}
              },
              {
                id: 'Set',
                name: 'Set Data',
                type: 'n8n-nodes-base.set',
                typeVersion: 1,
                position: [200, 0],
                parameters: {
                  values: {
                    string: [
                      {
                        name: 'message',
                        value: 'Hello from aqil workflow!'
                      }
                    ]
                  }
                }
              }
            ],
            connections: [
              {
                source: 'ManualTrigger',
                target: 'Set',
                sourceOutput: 0,
                targetInput: 0
              }
            ]
          }
        },
        id: 1
      })
    });
    
    const data = await response.json();
    console.log('Response status:', response.status);
    console.log('Response data:', JSON.stringify(data, null, 2));
    
    if (data.result) {
      const workflowData = JSON.parse(data.result.content[0].text);
      console.log('\n=== WORKFLOW CREATED SUCCESSFULLY ===');
      console.log('Workflow ID:', workflowData.id);
      console.log('Workflow Name:', workflowData.name);
      console.log('Creation Date:', workflowData.createdAt);
      console.log('Status:', workflowData.active ? 'Active' : 'Inactive');
    }
    
  } catch (error) {
    console.error('Error:', error);
  }
}

createAqilWorkflow();
