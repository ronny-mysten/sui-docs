/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const why_sui = require('./src/sidebars/why_sui.js');
const guides = require('./src/sidebars/guides.js');
const concepts = require('./src/sidebars/concepts.js');
const standards = require('./src/sidebars/standards.js');
const references = require('./src/sidebars/references.js');


const sidebars = {
  whySuiSidebar: why_sui,
  guidesSidebar: guides,
  conceptsSidebar: concepts,
  standardsSidebar: standards,
  referencesSidebar: references,
};

module.exports = sidebars;
