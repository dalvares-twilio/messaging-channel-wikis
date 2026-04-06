const skillDir = '/Users/dalvares/.claude/plugins/cache/anthropic-agent-skills/document-skills/69c0b1a06741/skills/pptx';
module.paths.unshift(`${skillDir}/node_modules`);
const pptxgen = require('pptxgenjs');
const html2pptx = require(`${skillDir}/scripts/html2pptx.js`);
const path = require('path');

async function createPresentation() {
    const pptx = new pptxgen();
    pptx.layout = 'LAYOUT_16x9';
    pptx.author = 'Claude';
    pptx.title = 'llm-wiki Skill';
    pptx.subject = 'Claude Code Skill Documentation';

    const baseDir = __dirname;
    const slides = [
        'slide1.html',
        'slide2.html',
        'slide3.html',
        'slide4.html',
        'slide5.html',
        'slide6.html',
        'slide7.html',
        'slide8.html'
    ];

    for (const slideFile of slides) {
        const htmlPath = path.join(baseDir, slideFile);
        console.log(`Processing ${slideFile}...`);
        await html2pptx(htmlPath, pptx);
    }

    const outputPath = path.join(baseDir, 'llm-wiki-skill.pptx');
    await pptx.writeFile({ fileName: outputPath });
    console.log(`Presentation created: ${outputPath}`);
}

createPresentation().catch(console.error);
