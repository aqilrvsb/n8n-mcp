# Working Claude Desktop Configuration

This is the exact working configuration for Claude Desktop that connects to your Railway n8n instance.

## Configuration File

**Location**: `C:\Users\[USERNAME]\AppData\Roaming\Claude\claude_desktop_config.json`

**Content**:
```json
{
  "mcpServers": {
    "desktop-commander": {
      "command": "npx.cmd",
      "args": [
        "@wonderwhy-er/desktop-commander@latest"
      ]
    },
    "n8n-workflow-builder": {
      "command": "node",
      "args": ["C:\\Users\\ROGSTRIX\\mcp-n8n-workflow-builder\\build\\index.js"],
      "env": {
        "N8N_HOST": "https://n8n-production-790f.up.railway.app/api/v1",
        "N8N_API_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmYzM2OTgxYS1kYzMxLTQ5MGMtYTI2NC1mNGViYWQ2YjRmNTAiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwiaWF0IjoxNzQ5MDkxMzA1fQ.aHpecrktCwExMSo1Q6tMHZ0iRssxPWiWSqLyasaFfPM",
        "MCP_PORT": "58921"
      },
      "disabled": false,
      "alwaysAllow": [
        "list_workflows",
        "get_workflow",
        "list_executions",
        "get_execution"
      ],
      "autoApprove": [
        "create_workflow",
        "update_workflow",
        "activate_workflow",
        "deactivate_workflow",
        "delete_workflow",
        "delete_execution"
      ]
    },
    "facebook-ads": {
      "command": "node",
      "args": [
        "-e",
        "const https = require('https'); const readline = require('readline'); const USER_ID = '947228c3-d656-4973-aa4a-59ca2ff3e3b6'; const BASE_URL = 'newfb-production.up.railway.app'; const rl = readline.createInterface({ input: process.stdin, output: process.stdout }); function sendRequest(method, params = {}) { return new Promise((resolve, reject) => { const postData = JSON.stringify({ method, params }); const options = { hostname: BASE_URL, port: 443, path: `/mcp/${USER_ID}`, method: 'POST', headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(postData) } }; const req = https.request(options, (res) => { let data = ''; res.on('data', (chunk) => { data += chunk; }); res.on('end', () => { try { resolve(JSON.parse(data)); } catch (e) { reject(new Error('Invalid JSON response')); } }); }); req.on('error', reject); req.write(postData); req.end(); }); } rl.on('line', async (line) => { try { const message = JSON.parse(line); if (message.method === 'initialize') { console.log(JSON.stringify({ jsonrpc: '2.0', id: message.id, result: { protocolVersion: '2024-11-05', capabilities: { tools: {} }, serverInfo: { name: 'facebook-ads-http', version: '1.0.0' } } })); } else if (message.method === 'notifications/initialized') { return; } else if (message.method === 'tools/list') { console.log(JSON.stringify({ jsonrpc: '2.0', id: message.id, result: { tools: [ { name: 'create_campaign', description: 'Creates a new ad campaign', inputSchema: { type: 'object', properties: { name: { type: 'string' }, objective: { type: 'string' }, status: { type: 'string', enum: ['ACTIVE', 'PAUSED'] } }, required: ['name', 'objective'] } }, { name: 'get_ad_accounts', description: 'Get list of available Facebook ad accounts', inputSchema: { type: 'object', properties: {} } }, { name: 'select_ad_account', description: 'Select a specific Facebook ad account to use', inputSchema: { type: 'object', properties: { accountId: { type: 'string', description: 'Facebook Ad Account ID (e.g., act_1234567890)' } }, required: ['accountId'] } }, { name: 'get_campaigns', description: 'Lists existing campaigns', inputSchema: { type: 'object', properties: { limit: { type: 'number', default: 25 } } } }, { name: 'get_campaign_details', description: 'Gets details for a specific campaign', inputSchema: { type: 'object', properties: { campaignId: { type: 'string', description: 'Campaign ID' } }, required: ['campaignId'] } }, { name: 'update_campaign', description: 'Updates an existing campaign', inputSchema: { type: 'object', properties: { campaignId: { type: 'string' }, name: { type: 'string' }, status: { type: 'string', enum: ['ACTIVE', 'PAUSED'] } }, required: ['campaignId'] } }, { name: 'delete_campaign', description: 'Deletes a campaign', inputSchema: { type: 'object', properties: { campaignId: { type: 'string' } }, required: ['campaignId'] } }, { name: 'create_custom_audience', description: 'Creates a custom, website, or engagement audience', inputSchema: { type: 'object', properties: { name: { type: 'string' }, type: { type: 'string', enum: ['CUSTOM', 'WEBSITE', 'ENGAGEMENT'] }, description: { type: 'string' } }, required: ['name', 'type'] } }, { name: 'get_audiences', description: 'Lists available custom audiences', inputSchema: { type: 'object', properties: { limit: { type: 'number', default: 25 } } } }, { name: 'create_lookalike_audience', description: 'Creates a lookalike audience', inputSchema: { type: 'object', properties: { name: { type: 'string' }, sourceAudienceId: { type: 'string' }, country: { type: 'string' }, ratio: { type: 'number', minimum: 1, maximum: 10 } }, required: ['name', 'sourceAudienceId', 'country'] } }, { name: 'create_ad_set', description: 'Creates a new ad set', inputSchema: { type: 'object', properties: { campaignId: { type: 'string' }, name: { type: 'string' }, targeting: { type: 'object' }, budget: { type: 'number' } }, required: ['campaignId', 'name', 'targeting', 'budget'] } }, { name: 'get_campaign_insights', description: 'Retrieves performance insights for a campaign', inputSchema: { type: 'object', properties: { campaignId: { type: 'string' }, dateRange: { type: 'string', enum: ['today', 'yesterday', 'last_7_days', 'last_30_days'] } }, required: ['campaignId'] } }, { name: 'duplicate_campaign', description: 'Duplicates an existing campaign', inputSchema: { type: 'object', properties: { campaignId: { type: 'string' }, newName: { type: 'string' } }, required: ['campaignId'] } }, { name: 'update_ad_set', description: 'Updates an existing ad set', inputSchema: { type: 'object', properties: { adSetId: { type: 'string' }, name: { type: 'string' }, status: { type: 'string', enum: ['ACTIVE', 'PAUSED'] }, dailyBudget: { type: 'number' } }, required: ['adSetId'] } }, { name: 'delete_ad_set', description: 'Deletes an ad set', inputSchema: { type: 'object', properties: { adSetId: { type: 'string' } }, required: ['adSetId'] } }, { name: 'duplicate_ad_set', description: 'Duplicates an existing ad set', inputSchema: { type: 'object', properties: { adSetId: { type: 'string' }, newName: { type: 'string' } }, required: ['adSetId'] } }, { name: 'get_ad_set_insights', description: 'Retrieves performance insights for an ad set', inputSchema: { type: 'object', properties: { adSetId: { type: 'string' }, dateRange: { type: 'string', enum: ['today', 'yesterday', 'last_7_days', 'last_30_days'] } }, required: ['adSetId'] } }, { name: 'update_custom_audience', description: 'Updates an existing custom audience', inputSchema: { type: 'object', properties: { audienceId: { type: 'string' }, name: { type: 'string' }, description: { type: 'string' } }, required: ['audienceId'] } }, { name: 'create_ad', description: 'Creates a new ad using a pre-created ad creative', inputSchema: { type: 'object', properties: { adSetId: { type: 'string', description: 'Ad Set ID where the ad will be created' }, name: { type: 'string', description: 'Name for the ad' }, creativeId: { type: 'string', description: 'ID of pre-created ad creative (use create_ad_creative first)' } }, required: ['adSetId', 'name', 'creativeId'] } }, { name: 'create_ad_creative', description: 'Creates a new ad creative with dynamic parameters', inputSchema: { type: 'object', properties: { name: { type: 'string', description: 'Name for the ad creative' }, pageId: { type: 'string', description: 'Facebook Page ID (use get_facebook_pages to find valid IDs)' }, link: { type: 'string', description: 'Destination URL for the ad' }, message: { type: 'string', description: 'Main ad message/text' }, description: { type: 'string', description: 'Optional ad description' }, callToAction: { type: 'object', description: 'Optional call-to-action button', properties: { type: { type: 'string' }, link: { type: 'string' } } } }, required: ['name', 'pageId', 'link', 'message'] } }, { name: 'duplicate_ad', description: 'Duplicates an existing ad', inputSchema: { type: 'object', properties: { adId: { type: 'string' }, newName: { type: 'string' } }, required: ['adId'] } }, { name: 'update_ad', description: 'Updates an existing ad', inputSchema: { type: 'object', properties: { adId: { type: 'string' }, name: { type: 'string' }, status: { type: 'string', enum: ['ACTIVE', 'PAUSED'] }, creative: { type: 'object' } }, required: ['adId'] } }, { name: 'delete_ad', description: 'Deletes an ad', inputSchema: { type: 'object', properties: { adId: { type: 'string' } }, required: ['adId'] } }, { name: 'get_ad_insights', description: 'Retrieves performance insights for an ad', inputSchema: { type: 'object', properties: { adId: { type: 'string' }, dateRange: { type: 'string', enum: ['today', 'yesterday', 'last_7_days', 'last_30_days'] } }, required: ['adId'] } }, { name: 'get_facebook_pages', description: 'Get user Facebook pages with detailed permissions and ad readiness info', inputSchema: { type: 'object', properties: {} } }, { name: 'generate_campaign_prompt', description: 'Generates a prompt for campaign creation using a template', inputSchema: { type: 'object', properties: { objective: { type: 'string' }, industry: { type: 'string' }, target_audience: { type: 'string' } }, required: ['objective'] } } ] } })); } else if (message.method === 'resources/list') { console.log(JSON.stringify({ jsonrpc: '2.0', id: message.id, result: { resources: [] } })); } else if (message.method === 'prompts/list') { console.log(JSON.stringify({ jsonrpc: '2.0', id: message.id, result: { prompts: [] } })); } else if (message.method === 'tools/call') { try { const result = await sendRequest(message.params.name, message.params.arguments || {}); console.log(JSON.stringify({ jsonrpc: '2.0', id: message.id, result: { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] } })); } catch (error) { console.log(JSON.stringify({ jsonrpc: '2.0', id: message.id, error: { code: -32603, message: error.message } })); } } else { console.log(JSON.stringify({ jsonrpc: '2.0', id: message.id, result: {} })); } } catch (error) { console.error('Parse error:', error); } }); process.on('SIGINT', () => process.exit(0)); process.on('SIGTERM', () => process.exit(0));"
      ]
    }
  }
}
```

## Important Notes

1. **Update the path**: Change `C:\\Users\\ROGSTRIX\\mcp-n8n-workflow-builder\\build\\index.js` to your actual path
2. **Update N8N_HOST**: Change to your Railway n8n URL + `/api/v1`
3. **Update N8N_API_KEY**: Use your actual n8n API key
4. **Restart Claude Desktop** after making changes

## For New Installation

When setting up on a new laptop:

1. Clone this repository
2. Run `npm install && npm run build`
3. Update the config with your correct paths
4. Get your n8n API key
5. Restart Claude Desktop

This configuration includes both n8n MCP and Facebook Ads MCP working together.
