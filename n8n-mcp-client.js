const fetch = require('node-fetch');

class N8nMCPClient {
  constructor(mcpUrl = 'http://localhost:3456/mcp') {
    this.mcpUrl = mcpUrl;
  }

  async callTool(toolName, args = {}) {
    try {
      const response = await fetch(this.mcpUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'tools/call',
          params: { name: toolName, arguments: args },
          id: Date.now()
        })
      });
      
      const data = await response.json();
      if (data.error) {
        throw new Error(`MCP Error: ${data.error.message}`);
      }
      
      return data.result;
    } catch (error) {
      console.error(`Error calling ${toolName}:`, error.message);
      throw error;
    }
  }

  async listWorkflows() {
    return await this.callTool('list_workflows');
  }

  async createWorkflow(name, nodes, connections) {
    return await this.callTool('create_workflow', { name, nodes, connections });
  }

  async getWorkflow(id) {
    return await this.callTool('get_workflow', { id });
  }

  async updateWorkflow(id, name, nodes, connections) {
    return await this.callTool('update_workflow', { id, name, nodes, connections });
  }

  async deleteWorkflow(id) {
    return await this.callTool('delete_workflow', { id });
  }

  async activateWorkflow(id) {
    return await this.callTool('activate_workflow', { id });
  }

  async deactivateWorkflow(id) {
    return await this.callTool('deactivate_workflow', { id });
  }
}

module.exports = N8nMCPClient;

// Example usage:
if (require.main === module) {
  async function example() {
    const client = new N8nMCPClient();
    
    // List all workflows
    const workflows = await client.listWorkflows();
    console.log('Workflows:', JSON.parse(workflows.content[0].text));
  }
  
  example().catch(console.error);
}
