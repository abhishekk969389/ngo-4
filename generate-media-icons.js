const fs = require('fs');
const path = require('path');

const icons = {
  "feather": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#1a3520" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L3 13.5V21h7.5L20.24 12.24z" /><line x1="16" y1="8" x2="2" y2="22" /><line x1="17.5" y1="15" x2="9" y2="15" /></svg>`,
  "landmark": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#1a3520" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L3 7v2h18V7l-9-5z" /><path d="M5 11v8" /><path d="M9 11v8" /><path d="M13 11v8" /><path d="M17 11v8" /><path d="M3 21h18" /><path d="M12 2L2 9h20L12 2z" fill="#1a3520" fill-opacity="0.1" /></svg>`,
  "sunrise": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#1a3520" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M4.93 10.93l2.83 2.83M2 18h20M20 18a8 8 0 0 0-16 0" /><path d="M19.07 10.93l-2.83 2.83" /><path d="M22 18H2" /><line x1="8" y1="6" x2="10" y2="8" /><line x1="16" y1="6" x2="14" y2="8" /></svg>`,
  "message-square": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1a3520"><path d="M12 2C6.48 2 2 6.04 2 11c0 2.87 1.5 5.42 3.84 7.08L5 22l4.34-1.45C10.22 20.85 11.1 21 12 21c5.52 0 10-4.04 10-9s-4.48-9-10-9zm-1 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" /></svg>`,
  "tree": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#1a3520" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19v3" /><path d="M12 19c-4 0-7-2.5-7-6a7 7 0 0 1 14 0c0 3.5-3 6-7 6z" fill="#1a3520" fill-opacity="0.15" /><path d="M12 15c-2.5 0-4-1.5-4-3.5a4 4 0 0 1 8 0c0 2-1.5 3.5-4 3.5z" /><path d="M9 21h6" /></svg>`,
  "building-2": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1a3520"><path d="M19 21V9l-5-4-5 4v12H3v2h18v-2h-2zm-8-2H9v-2h2v2zm0-4H9v-2h2v2zm0-4H9V9h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2z" /></svg>`,
  "chart": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#1a3520" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="8" y1="13" x2="8" y2="11" /><line x1="11" y1="13" x2="11" y2="9" /><line x1="14" y1="13" x2="14" y2="7" /></svg>`,
  "globe": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#1a3520" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>`,
  "users": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1a3520"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /></svg>`,
  "metro": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#1a3520"/><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" fill="#ffffff" font-family="serif" font-weight="bold" font-size="12">MR</text></svg>`,
  "viewpoint": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1a3520"><path d="M12 2L2 22h5l5-10 5 10h5L12 2zm0 6l3.5 7h-7L12 8z" /></svg>`,
  "columns": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#1a3520" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="4" x2="20" y2="4" /><line x1="4" y1="20" x2="20" y2="20" /><line x1="6" y1="4" x2="6" y2="20" /><line x1="10" y1="4" x2="10" y2="20" /><line x1="14" y1="4" x2="14" y2="20" /><line x1="18" y1="4" x2="18" y2="20" /></svg>`,
  "mountain": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1a3520"><path d="M14 6l-3.8 5.7 1.8 2.7H20L14 6zM8 2L1 14h14L8 2zm0 4.2l3.2 5.8H4.8L8 6.2z" /></svg>`,
  "pen-nib": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1a3520"><path d="M12 2L8.5 8.5 12 22l3.5-13.5L12 2zm0 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" /></svg>`,
  "newspaper": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#1a3520" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2" stroke-width="2" /><line x1="8" y1="7" x2="12" y2="7" stroke-width="2.5" /><line x1="8" y1="11" x2="16" y2="11" /><line x1="8" y1="14" x2="16" y2="14" /><line x1="8" y1="17" x2="13" y2="17" /></svg>`,
  "default": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1a3520"><circle cx="12" cy="12" r="8" /></svg>`
};

const dir = path.join(__dirname, 'public', 'media-icons');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

for (const [name, content] of Object.entries(icons)) {
    fs.writeFileSync(path.join(dir, `${name}.svg`), content);
    console.log(`Generated ${name}.svg`);
}
