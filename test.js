// Simple test suite
const fs = require('fs');
const path = require('path');

console.log('Running tests for Messer ASEAN Teams Documentation...\n');

// Test 1: Check if all required documentation files exist
const requiredFiles = [
  'Project-Summary.md',
  'Teams-Setup-Instructions.md', 
  'ASEAN-Teams-Setup-Checklist.md',
  'Teams-User-Guide.md',
  'Teams-Training-Slides.md',
  'Teams-Training-Agenda.md',
  'ASEAN-Teams-Guidelines.md'
];

console.log('Test 1: Checking documentation files...');
let filesTest = true;
requiredFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    console.log(`✓ ${file} exists`);
  } else {
    console.log(`✗ ${file} missing`);
    filesTest = false;
  }
});

// Test 2: Check package.json exists and has required scripts
console.log('\nTest 2: Checking package.json...');
let packageTest = true;
const packagePath = path.join(__dirname, 'package.json');
if (fs.existsSync(packagePath)) {
  try {
    const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    const requiredScripts = ['start', 'build', 'test'];
    
    requiredScripts.forEach(script => {
      if (pkg.scripts && pkg.scripts[script]) {
        console.log(`✓ ${script} script defined`);
      } else {
        console.log(`✗ ${script} script missing`);
        packageTest = false;
      }
    });
  } catch (error) {
    console.log('✗ package.json is invalid JSON');
    packageTest = false;
  }
} else {
  console.log('✗ package.json missing');
  packageTest = false;
}

// Test 3: Check server.js exists
console.log('\nTest 3: Checking server file...');
let serverTest = true;
const serverPath = path.join(__dirname, 'server.js');
if (fs.existsSync(serverPath)) {
  console.log('✓ server.js exists');
} else {
  console.log('✗ server.js missing');
  serverTest = false;
}

// Test Results
console.log('\n' + '='.repeat(50));
console.log('TEST RESULTS:');
console.log('='.repeat(50));
console.log(`Documentation files: ${filesTest ? 'PASS' : 'FAIL'}`);
console.log(`Package configuration: ${packageTest ? 'PASS' : 'FAIL'}`);
console.log(`Server file: ${serverTest ? 'PASS' : 'FAIL'}`);

const allTestsPassed = filesTest && packageTest && serverTest;
console.log(`\nOverall: ${allTestsPassed ? 'ALL TESTS PASSED' : 'SOME TESTS FAILED'}`);

// Exit with appropriate code
process.exit(allTestsPassed ? 0 : 1);