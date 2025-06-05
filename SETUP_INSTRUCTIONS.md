# n8n MCP Setup Instructions

This repository contains a working n8n MCP (Model Context Protocol) integration that allows Claude to control n8n workflows on Railway.

## 🎯 What This Gives You

- **Full n8n control from Claude**: Create, manage, and execute workflows
- **Railway n8n integration**: Works with your hosted n8n instance
- **Facebook Ads automation**: Pre-configured Facebook Ads MCP tools
- **Automated workflow creation**: Build complex automations via chat

## 📋 Prerequisites

- Node.js (v16 or higher)
- Claude Desktop
- n8n instance (Railway or local)
- n8n API key

## 🚀 Quick Setup

### 1. Clone and Install
```bash
git clone https://github.com/aqilrvsb/n8n-mcp.git
cd n8n-mcp
npm install
npm run build
```

### 2. Configure Environment
Create `.env` file:
```env
N8N_HOST=https://your-n8n-instance.railway.app/api/v1
N8N_API_KEY=your_api_key_here
MCP_PORT=58921
```

### 3. Configure Claude Desktop
Add to `claude_desktop_config.json`:
```json
{
  "mcpServers": {
    "n8n-workflow-builder": {
      "command": "node",
      "args": ["path/to/n8n-mcp/build/index.js"],
      "env": {
        "N8N_HOST": "https://your-n8n-instance.railway.app/api/v1",
        "N8N_API_KEY": "your_api_key_here",
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
    }
  }
}
```

### 4. Get Your n8n API Key

1. Go to your n8n instance
2. Settings → API Keys
3. Create new API key
4. Copy the key to your configuration

### 5. Test the Setup

Restart Claude Desktop and try:
```
list my n8n workflows
```

## 🔧 Available Commands

### Workflow Management
- `list_workflows` - List all workflows
- `create_workflow` - Create new workflows
- `get_workflow` - Get workflow details
- `update_workflow` - Update workflows
- `activate_workflow` - Activate workflows
- `delete_workflow` - Delete workflows

### Execution Management
- `list_executions` - List executions
- `execute_workflow` - Run workflows
- `get_execution` - Get execution details

### Tag Management
- `create_tag` - Create workflow tags
- `get_tags` - List tags
- `update_tag` - Update tags

## 📁 Config File Locations

### Windows
```
C:\Users\[USERNAME]\AppData\Roaming\Claude\claude_desktop_config.json
```

### macOS
```
~/Library/Application Support/Claude/claude_desktop_config.json
```

### Linux
```
~/.config/Claude/claude_desktop_config.json
```

## 🐛 Troubleshooting

### MCP Not Working
1. Check Claude Desktop logs
2. Verify n8n API key is valid
3. Ensure n8n instance is accessible
4. Restart Claude Desktop

### API Errors
1. Verify n8n URL includes `/api/v1`
2. Check API key permissions
3. Test n8n API directly:
   ```bash
   curl -H "X-N8N-API-KEY: your_key" https://your-n8n.railway.app/api/v1/workflows
   ```

## 🎉 Working Features

✅ Create workflows from Claude
✅ Manage existing workflows  
✅ Execute workflows remotely
✅ Full n8n API integration
✅ Railway n8n support
✅ Facebook Ads MCP integration

## 📧 Support

If you have issues, check the logs in Claude Desktop or create an issue in this repository.
