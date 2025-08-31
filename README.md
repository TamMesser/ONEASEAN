# Messer ASEAN Microsoft Teams Documentation

A web application that serves Microsoft Teams onboarding documentation for Messer ASEAN (Thailand, Vietnam, Malaysia).

## Quick Start

### Prerequisites
- Node.js 20.x or higher
- npm

### Installation and Running

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the application:**
   ```bash
   npm start
   ```

3. **Access the documentation:**
   Open your browser and visit: http://localhost:3000

### Available Scripts

- `npm start` - Start the web server (production mode)
- `npm run dev` - Start the web server (development mode) 
- `npm run build` - Run build process
- `npm test` - Run test suite
- `npm run health` - Check application health

### Features

- **Web-based Documentation**: All Microsoft Teams setup and training materials accessible through a modern web interface
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Branded Styling**: Uses official Messer brand colors and styling
- **Easy Navigation**: Organized documentation with clear navigation between sections

### Documentation Sections

- **Project Summary**: Overview of the Microsoft Teams onboarding initiative
- **Admin Setup Instructions**: Step-by-step guide for IT administrators
- **Setup Checklist**: Comprehensive deployment checklist
- **User Guide**: End-user documentation for Teams usage
- **Training Materials**: Slides and agenda for user training sessions
- **Guidelines**: Communication guidelines and best practices

### API Endpoints

- `GET /` - Home page with navigation
- `GET /doc/:filename` - Render specific markdown document as HTML
- `GET /health` - Health check endpoint

### Deployment

This application is configured for deployment to Azure Web Apps via GitHub Actions. The workflow file is located at `.github/workflows/azure-webapps-node.yml`.

### Project Structure

```
├── server.js              # Main web server
├── package.json           # Node.js configuration and dependencies  
├── test.js               # Test suite
├── README.md             # This file
├── *.md                  # Documentation files
└── .github/workflows/    # CI/CD configuration
```

### Environment Variables

- `PORT` - Server port (default: 3000)

### Contributing

This documentation serves the ONE ASEAN initiative to connect colleagues across Thailand, Vietnam, and Malaysia through unified Microsoft Teams collaboration.

---

**ONE ASEAN**: Growing together through unified communication and collaboration