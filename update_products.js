const fs = require('fs');
let content = fs.readFileSync('products.html', 'utf8');

// Nav: shadow-sm -> shadow-level-1
content = content.replace(
    /class="fixed top-0 w-full bg-surface\/90 backdrop-blur-md z-50 shadow-sm/g,
    'class="fixed top-0 w-full bg-surface/90 backdrop-blur-md z-50 shadow-level-1'
);

// Call button: rounded-lg -> rounded-xl
content = content.replace(
    /class="bg-primary text-on-primary p-2 rounded-lg"/g,
    'class="bg-primary text-on-primary p-2 rounded-xl"'
);

// Sidebar card: shadow-sm -> shadow-level-1
content = content.replace(
    /shadow-sm" *>/g,
    function(match) {
        return match.replace('shadow-sm', 'shadow-level-1');
    }
);

// Product cards: shadow-sm hover:shadow-lg -> shadow-level-1 hover:shadow-level-2
content = content.replace(/shadow-sm hover:shadow-lg/g, 'shadow-level-1 hover:shadow-level-2');
content = content.replace(/shadow-sm hover:shadow-xl/g, 'shadow-level-1 hover:shadow-level-2');
content = content.replace(/shadow-sm hover:shadow-md/g, 'shadow-level-1 hover:shadow-level-2');

// Remaining shadow-sm (standalone)
content = content.replace(/shadow-sm /g, 'shadow-level-1 ');
content = content.replace(/shadow-sm"/g, 'shadow-level-1"');

// Hero buttons padding: px-lg -> px-md, rounded-lg -> rounded-xl
content = content.replace(/px-lg py-sm rounded-lg/g, 'px-md py-sm rounded-xl');

// Hero shadow
content = content.replace(/shadow-lg hover:shadow-xl/g, 'shadow-level-2 hover:shadow-level-3');

// Scroll effect JS
content = content.replace(/classList\.add\('shadow-md'\)/g, "classList.add('shadow-level-2')");
content = content.replace(/classList\.remove\('shadow-md'\)/g, "classList.remove('shadow-level-2')");

// Input focus styling
content = content.replace(
    /rounded-lg border-outline-variant focus:border-\[#0f172a\] focus:ring-\[#0f172a\]/g,
    'rounded-xl border-[#CBD5E1] focus:border-[#0f172a] focus:ring-[#0f172a]/20 focus:ring-2'
);

// Submit button padding
content = content.replace(/px-xl py-md rounded-lg/g, 'px-md py-sm rounded-xl');

// shadow-md hover:shadow-lg -> shadow-level-1 hover:shadow-level-2
content = content.replace(/shadow-md hover:shadow-lg/g, 'shadow-level-1 hover:shadow-level-2');

// Contact form card
content = content.replace(/shadow-xl border/g, 'shadow-level-2 border');

// Feature icon containers: rounded-lg -> rounded-xl
content = content.replace(/bg-primary-container text-on-primary-container rounded-lg flex/g, 'bg-primary-container text-on-primary-container rounded-xl flex');

// Testimonial shadow
content = content.replace(/rounded-2xl relative shadow-sm"/g, 'rounded-2xl relative shadow-level-1"');

// View all button
content = content.replace(/rounded-lg transition-all duration-300 shadow-sm/g, 'rounded-xl transition-all duration-300 shadow-level-1');

// hover:shadow-md
content = content.replace(/hover:shadow-md/g, 'hover:shadow-level-1');

// Feature cards: p-lg -> p-md (for smaller component internal padding)
content = content.replace(/flex flex-col gap-sm p-lg bg-surface rounded-2xl/g, 'flex flex-col gap-sm p-md bg-surface rounded-2xl');

fs.writeFileSync('products.html', content, 'utf8');
console.log('products.html updated successfully');
