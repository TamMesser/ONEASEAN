const express = require('express');
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));

// Set up markdown rendering
marked.setOptions({
  gfm: true,
  breaks: true
});

// Home page with navigation
app.get('/', (req, res) => {
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Messer ASEAN Microsoft Teams Documentation</title>
    <style>
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            margin: 0; 
            padding: 20px; 
            background-color: #f5f5f5;
        }
        .container { 
            max-width: 1200px; 
            margin: 0 auto; 
            background: white; 
            padding: 30px; 
            border-radius: 8px; 
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 40px;
            padding-bottom: 20px;
            border-bottom: 3px solid #004C97;
        }
        .header h1 { 
            color: #004C97; 
            margin: 0;
            font-size: 2.5em;
        }
        .header p {
            color: #666;
            font-size: 1.2em;
            margin: 10px 0 0 0;
        }
        .nav-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 30px;
        }
        .nav-card {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #E3002D;
            transition: transform 0.2s;
        }
        .nav-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        .nav-card h3 {
            color: #004C97;
            margin-top: 0;
        }
        .nav-card a {
            color: #E3002D;
            text-decoration: none;
            font-weight: bold;
        }
        .nav-card a:hover {
            text-decoration: underline;
        }
        .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Messer ASEAN Microsoft Teams Documentation</h1>
            <p>Connecting Thailand, Vietnam, and Malaysia as ONE ASEAN</p>
        </div>
        
        <div class="nav-grid">
            <div class="nav-card">
                <h3>📋 Project Overview</h3>
                <p>Complete project summary and objectives for the Microsoft Teams onboarding initiative.</p>
                <a href="/doc/Project-Summary">View Project Summary →</a>
            </div>
            
            <div class="nav-card">
                <h3>⚙️ Admin Setup</h3>
                <p>Step-by-step instructions for IT administrators to set up Microsoft Teams.</p>
                <a href="/doc/Teams-Setup-Instructions">Setup Instructions →</a>
            </div>
            
            <div class="nav-card">
                <h3>✅ Setup Checklist</h3>
                <p>Comprehensive checklist for Teams deployment and configuration.</p>
                <a href="/doc/ASEAN-Teams-Setup-Checklist">View Checklist →</a>
            </div>
            
            <div class="nav-card">
                <h3>👥 User Guide</h3>
                <p>End-user documentation for accessing and using Microsoft Teams effectively.</p>
                <a href="/doc/Teams-User-Guide">User Guide →</a>
            </div>
            
            <div class="nav-card">
                <h3>🎓 Training Materials</h3>
                <p>Training slides and agenda for user onboarding sessions.</p>
                <a href="/doc/Teams-Training-Slides">Training Slides →</a><br>
                <a href="/doc/Teams-Training-Agenda">Training Agenda →</a>
            </div>
            
            <div class="nav-card">
                <h3>📖 Guidelines</h3>
                <p>Communication guidelines and best practices for Teams usage.</p>
                <a href="/doc/ASEAN-Teams-Guidelines">View Guidelines →</a>
            </div>
        </div>
        
        <div class="footer">
            <p><strong>ONE ASEAN:</strong> Growing together through unified communication and collaboration</p>
        </div>
    </div>
</body>
</html>`;
  
  res.send(htmlContent);
});

// Serve markdown files as HTML
app.get('/doc/:filename', (req, res) => {
  const filename = req.params.filename;
  const markdownPath = path.join(__dirname, `${filename}.md`);
  
  if (!fs.existsSync(markdownPath)) {
    return res.status(404).send('Document not found');
  }
  
  const markdownContent = fs.readFileSync(markdownPath, 'utf8');
  const htmlContent = marked(markdownContent);
  
  const styledHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${filename} - Messer ASEAN Teams Documentation</title>
    <style>
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            line-height: 1.6; 
            margin: 0; 
            padding: 20px; 
            background-color: #f5f5f5;
        }
        .container { 
            max-width: 900px; 
            margin: 0 auto; 
            background: white; 
            padding: 30px; 
            border-radius: 8px; 
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .nav-header {
            background: #004C97;
            color: white;
            padding: 15px 20px;
            margin: -30px -30px 30px -30px;
            border-radius: 8px 8px 0 0;
        }
        .nav-header a {
            color: white;
            text-decoration: none;
            font-weight: normal;
        }
        .nav-header a:hover {
            text-decoration: underline;
        }
        h1, h2 { color: #004C97; }
        h3, h4 { color: #E3002D; }
        a { color: #E3002D; }
        a:hover { color: #004C97; }
        code { 
            background: #f8f9fa; 
            padding: 2px 4px; 
            border-radius: 3px; 
            font-family: 'Courier New', monospace;
        }
        pre { 
            background: #f8f9fa; 
            padding: 15px; 
            border-radius: 5px; 
            overflow-x: auto;
        }
        ul li::marker { color: #E3002D; }
        ol li::marker { color: #E3002D; }
        blockquote {
            border-left: 4px solid #E3002D;
            margin: 0;
            padding-left: 20px;
            color: #666;
        }
        table {
            border-collapse: collapse;
            width: 100%;
            margin: 20px 0;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }
        th {
            background-color: #004C97;
            color: white;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="nav-header">
            <a href="/">← Back to Documentation Home</a>
        </div>
        ${htmlContent}
    </div>
</body>
</html>`;
  
  res.send(styledHtml);
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Messer ASEAN Teams Documentation server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to access the documentation`);
});

module.exports = app;