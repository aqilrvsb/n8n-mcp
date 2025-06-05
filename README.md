# 🚀 n8n MCP - Complete n8n Automation for Claude

A working **Model Context Protocol (MCP)** integration that gives Claude full control over your n8n workflows. Supports Railway hosting, Facebook Ads automation, and complete workflow management.

## ✨ What This Does

Transform Claude into your **n8n automation assistant**:
- 🔄 **Create, manage & execute workflows** via chat
- 🌐 **Railway n8n integration** - works with hosted instances  
- 📱 **Facebook Ads automation** - pre-built MCP integration
- 🎯 **Real-time workflow control** - activate, deactivate, monitor
- 📊 **Execution monitoring** - track runs and debug issues

## 🎯 Live Demo

Your n8n instance: **https://n8n-production-790f.up.railway.app/**

Chat with Claude:
- *"list my n8n workflows"*
- *"create a daily email automation workflow"*  
- *"activate the Facebook ads workflow"*
- *"show me recent workflow executions"*

## 🚀 Quick Setup (5 Minutes)

### 1. Clone & Install
```bash
git clone https://github.com/aqilrvsb/n8n-mcp.git
cd n8n-mcp
npm install
npm run build
```

### 2. Run Setup Script
```bash
# Windows
install.bat

# Linux/Mac
chmod +x install.sh && ./install.sh
```

### 3. Get Your n8n API Key
1. Go to your n8n instance: https://n8n-production-790f.up.railway.app/
2. **Settings** → **API Keys** → **Create API Key**
3. Copy the generated key

### 4. Configure Environment
Edit `.env` file:
```env
N8N_HOST=https://n8n-production-790f.up.railway.app/api/v1
N8N_API_KEY=your_api_key_here
MCP_PORT=58921
```

### 5. Setup Claude Desktop
**Windows:** `C:\Users\[USERNAME]\AppData\Roaming\Claude\claude_desktop_config.json`

**Mac:** `~/Library/Application Support/Claude/claude_desktop_config.json`

**Linux:** `~/.config/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "n8n-workflow-builder": {
      "command": "node",
      "args": ["[FULL_PATH_TO]/n8n-mcp/build/index.js"],
      "env": {
        "N8N_HOST": "https://n8n-production-790f.up.railway.app/api/v1",
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

### 6. Restart Claude Desktop & Test
```
Try: "list my n8n workflows"
```

## 🛠️ Available Commands

### Workflow Management
- `list_workflows` - Show all workflows
- `create_workflow` - Build new automations
- `get_workflow` - Get workflow details
- `update_workflow` - Modify existing workflows
- `activate_workflow` / `deactivate_workflow` - Control workflow state
- `duplicate_workflow` - Copy workflows
- `delete_workflow` - Remove workflows

### Execution Control  
- `execute_workflow` - Run workflows manually
- `list_executions` - Show execution history
- `get_execution` - Get execution details
- `delete_execution` - Clean up execution logs

### Organization
- `create_tag` / `get_tags` / `update_tag` / `delete_tag` - Organize workflows

## 🎯 Pre-Built Integrations

### Facebook Ads Automation
Your setup includes a complete **Facebook Ads MCP** with tools for:
- Campaign management (create, update, delete)
- Ad set management with targeting
- Ad creative creation
- Performance insights and reporting
- Audience management (custom, lookalike)

### Railway n8n Support
Optimized for **Railway hosting** with:
- Automatic API endpoint configuration
- Environment variable management
- Cloud-first architecture
- SSL/HTTPS support

## 📚 Documentation Files

- **SETUP_INSTRUCTIONS.md** - Detailed installation guide
- **CLAUDE_CONFIG.md** - Complete Claude Desktop configuration
- **examples/** - Sample workflows and use cases

## 🐛 Troubleshooting

### MCP Not Working
1. ✅ Check n8n API key is valid
2. ✅ Verify Railway n8n instance is accessible  
3. ✅ Restart Claude Desktop completely
4. ✅ Check console logs in Claude Desktop

### API Errors
```bash
# Test your n8n API directly
curl -H "X-N8N-API-KEY: your_key" \
     https://n8n-production-790f.up.railway.app/api/v1/workflows
```

### Port Conflicts
If port 58921 is busy, change `MCP_PORT` in both `.env` and Claude config:
```env
MCP_PORT=58922
```

## 💡 Example Use Cases

### Daily Automation
*"Create a workflow that checks my email every hour and sends me a summary"*

### Social Media Management  
*"Build a workflow that posts to Twitter and Facebook when I publish a blog post"*

### Lead Generation
*"Set up a workflow that captures leads from my website and adds them to my CRM"*

### Data Sync
*"Create a workflow that syncs data between my e-commerce store and inventory system"*

### Facebook Ads Management
*"Build an automated campaign that creates ads based on my product catalog"*

## 🔧 Advanced Configuration

### Multiple n8n Instances
Configure multiple MCP servers for different environments:

```json
{
  "mcpServers": {
    "n8n-production": {
      "command": "node",
      "args": ["path/to/build/index.js"],
      "env": {
        "N8N_HOST": "https://prod-n8n.railway.app/api/v1",
        "N8N_API_KEY": "prod_key",
        "MCP_PORT": "58921"
      }
    },
    "n8n-development": {
      "command": "node", 
      "args": ["path/to/build/index.js"],
      "env": {
        "N8N_HOST": "https://dev-n8n.railway.app/api/v1",
        "N8N_API_KEY": "dev_key",
        "MCP_PORT": "58922"
      }
    }
  }
}
```

### Custom Workflow Templates
Add your own workflow templates by modifying the prompts in `src/prompts/`.

## 🌟 Features Confirmed Working

✅ **Workflow Creation** - Build complex automations via chat  
✅ **Railway n8n Integration** - Full cloud hosting support  
✅ **Facebook Ads MCP** - Complete ads automation  
✅ **Real-time Execution** - Instant workflow control  
✅ **Cross-platform** - Windows, Mac, Linux support  
✅ **Error Handling** - Robust debugging and logging  
✅ **Multi-instance** - Support multiple n8n environments  

## 📦 What's Included

```
n8n-mcp/
├── src/                    # TypeScript source code
├── build/                  # Compiled JavaScript  
├── examples/               # Example workflows
├── SETUP_INSTRUCTIONS.md   # Complete setup guide
├── CLAUDE_CONFIG.md        # Working Claude configuration
├── install.bat            # Windows setup script
├── install.sh             # Linux/Mac setup script
├── package.json           # Dependencies & scripts
└── README.md              # This file
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)  
5. Open a Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🆘 Support

- **Issues**: https://github.com/aqilrvsb/n8n-mcp/issues
- **Discussions**: Use GitHub Discussions for questions
- **Railway n8n**: https://n8n-production-790f.up.railway.app/

## ⭐ Show Your Support

If this project helped you automate your workflows, please ⭐ star the repository!

---

**Built with ❤️ for automation enthusiasts**

*Transform your workflows. Automate everything. Control with Claude.*