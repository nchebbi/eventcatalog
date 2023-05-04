#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

const eventCatalogDir = path.join(__dirname, '../packages/eventcatalog');
const projectDIR = path.join(__dirname, '../examples/basic');

fs.copyFileSync(path.join(projectDIR, 'eventcatalog.config.js'), path.join(eventCatalogDir, 'eventcatalog.config.js'));

execSync(`SET PROJECT_DIR=${projectDIR} npm run build`, {
  cwd: eventCatalogDir,
  stdio: 'inherit',
});
