@echo off
REM n8n MCP Installation Script for Windows
REM Run this script to set up n8n MCP on a new machine

echo 🚀 Setting up n8n MCP...

REM 1. Install dependencies
echo 📦 Installing dependencies...
npm install

REM 2. Build the project  
echo 🔨 Building project...
npm run build

REM 3. Create .env file template
echo 📝 Creating .env template...
(
echo # n8n Configuration
echo N8N_HOST=https://your-n8n-instance.railway.app/api/v1
echo N8N_API_KEY=your_api_key_here
echo MCP_PORT=58921
echo.
echo # Optional: Debug mode
echo DEBUG=true
) > .env

echo ✅ Setup complete!
echo.
echo 📋 Next steps:
echo 1. Edit .env with your actual n8n URL and API key
echo 2. Update Claude Desktop config with the correct path
echo 3. Restart Claude Desktop
echo.
echo 📄 See SETUP_INSTRUCTIONS.md for detailed instructions
echo 📄 See CLAUDE_CONFIG.md for Claude Desktop configuration

pause
