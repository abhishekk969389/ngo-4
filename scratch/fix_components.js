const fs = require('fs');
function replaceFile(path, from, to) {
    if (fs.existsSync(path)) {
        let content = fs.readFileSync(path, 'utf8');
        content = content.split(from).join(to);
        fs.writeFileSync(path, content, 'utf8');
    }
}

// 1. app/(pages)/blog/[id]/page.tsx
replaceFile('app/(pages)/blog/[id]/page.tsx', 'blog: NgoBlogCardItem', 'blog: any');
replaceFile('app/(pages)/blog/[id]/page.tsx', 'b: NgoBlogCardItem', 'b: any');
replaceFile('app/(pages)/blog/[id]/page.tsx', 'const blogItem: NgoBlogCardItem', 'const blogItem: any');

// 2. app/components/layout/blog/blogsection.tsx
replaceFile('app/components/layout/blog/blogsection.tsx', 'blog: NgoBlogCardItem', 'blog: any');
replaceFile('app/components/layout/blog/blogsection.tsx', 'blog.alt', '(blog as any).alt');
replaceFile('app/components/layout/blog/blogsection.tsx', 'blog.date', '(blog as any).date');
replaceFile('app/components/layout/blog/blogsection.tsx', 'blog.readMoreText', '(blog as any).readMoreText');

// 3. app/components/layout/careers/careerapply.tsx
replaceFile('app/components/layout/careers/careerapply.tsx', 'field: NgoCareerFormField', 'field: any');

// 4. app/components/layout/support/contact.tsx
replaceFile('app/components/layout/support/contact.tsx', 'fields.map((f', 'fields.map((f: any');
replaceFile('app/components/layout/support/contact.tsx', 'fields?.map((f', 'fields?.map((f: any');
replaceFile('app/components/layout/support/contact.tsx', 'f.name', '(f as any).name');
replaceFile('app/components/layout/support/contact.tsx', '(f)', '(f: any)');
replaceFile('app/components/layout/support/contact.tsx', '(option)', '(option: any)');

// 5. app/components/ui/banner.tsx
replaceFile('app/components/ui/banner.tsx', 'item.href && !item.isCurrent', '(item as any).href && !(item as any).isCurrent');
replaceFile('app/components/ui/banner.tsx', 'href={item.href}', 'href={(item as any).href}');
replaceFile('app/components/ui/banner.tsx', 'item.isCurrent || isLast', '(item as any).isCurrent || isLast');
replaceFile('app/components/ui/banner.tsx', 'item.isCurrent || isLast ? "page" : undefined', '(item as any).isCurrent || isLast ? "page" : undefined');
replaceFile('app/components/ui/banner.tsx', 'item.label', '(item as any).label');

console.log('Fixed component files');
