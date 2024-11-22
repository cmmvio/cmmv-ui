import * as fs from 'fs';
import * as path from 'path';
import * as MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import { glob } from 'glob';
import * as fg from 'fast-glob';
import { cwd } from 'process';

class GenerateDocs {
    async convertMarkdownToHTML() {
        hljs.registerLanguage(
            'ts',
            require('highlight.js/lib/languages/typescript'),
        );

        const markdown = MarkdownIt({
            html: true,
            linkify: true,
            breaks: true,
            typographer: true,
            highlight: (str, lang) => {
                if (lang && hljs.getLanguage(lang)) {
                    try {
                        return (
                            //'<div class="code-block-container">' +
                            '<pre><code class="hljs language-' +
                            lang +
                            '" lang="' +
                            lang +
                            '">' +
                            hljs.highlight(str, { language: lang }).value +
                            '</code></pre>'
                            //'<button class="copy-code-btn" onclick="copyToClipboard(this)">Copy</button>' +
                            //'</div>'
                        );
                    } catch (__) {}
                }

                return `<pre><code class="hljs">${markdown.utils.escapeHtml(str)}</code></pre>`;
            },
        });

        const docsFiles = await glob([
            './**/*.md',
            './*.md'
        ]);

        for (let file of docsFiles) {
            if (!file.includes('README') && !file.includes('node_modules')) {
                const content = await fs.readFileSync(
                    path.resolve(file),
                    'utf8',
                );
                let rendered = await markdown.render(content);
                rendered = this.injectCopyButton(rendered);
                rendered = this.fixLinks(rendered);
                rendered = this.addAnchorLinks(rendered);
                await fs.writeFileSync(
                    file.replace('.md', '.html'),
                    rendered,
                    'utf8',
                );
            }
        }
    }

    injectCopyButton(renderedHtml) {
        return renderedHtml.replace(
            /<pre><code class="hljs(.*?)>([\s\S]*?)<\/code><\/pre>/g,
            `<div class="code-block-container">
                <button class="copy-code-btn" onclick="copyToClipboard(this)" title="Copy">
                    <i class="fa-regular fa-clone"></i>
                </button>
                <pre><code class="hljs$1">$2</code></pre>
             </div>`,
        );
    }

    async generateIndex() {
        const docsFiles = await glob([
            './docs/**/*.html',
            './docs/*.html',
        ]);
        let index = {};
        let indexLink = {};

        docsFiles.sort((a, b) => {
            const regex = /(\d+)|([^\d]+)/g;
            const partsA = a.match(regex).map(part => Number(part));
            const partsB = b.match(regex).map(part => Number(part));

            for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
                if (partsA[i] !== partsB[i]) {
                    return partsA[i] > partsB[i] ? 1 : -1;
                }
            }

            return 0;
        });

        let pointer = 0;

        for (let file of docsFiles) {
            if (!file.includes('README') && !file.includes('node_modules')) {
                const pathFile = encodeURIComponent(
                    file
                        .replace(process.cwd(), '')
                        .replace('docs/', '')
                        .replace(/\\/g, '/'),
                );
                index[this.convertLinkToCleanURL(pathFile)] =
                    './' + file.replace(process.cwd() + '/', '');

                const title = this.getTitle(
                    './' + file.replace(process.cwd() + '/', ''),
                );

                indexLink[this.convertLinkToCleanURL(pathFile)] = {
                    prev: {
                        link: docsFiles[pointer - 1]
                            ? this.convertLinkToCleanURL(docsFiles[pointer - 1])
                            : '',
                        title: docsFiles[pointer - 1]
                            ? this.getTitle(
                                  './' +
                                      docsFiles[pointer - 1].replace(
                                          process.cwd() + '/',
                                          '',
                                      ),
                              )
                            : '',
                        desc: docsFiles[pointer - 1]
                            ? this.getDesc(
                                  './' +
                                      docsFiles[pointer - 1].replace(
                                          process.cwd() + '/',
                                          '',
                                      ),
                              )
                            : '',
                    },
                    next: {
                        link: docsFiles[pointer + 1]
                            ? this.convertLinkToCleanURL(docsFiles[pointer + 1])
                            : '',
                        title: docsFiles[pointer + 1]
                            ? this.getTitle(
                                  './' +
                                      docsFiles[pointer + 1].replace(
                                          process.cwd() + '/',
                                          '',
                                      ),
                              )
                            : '',
                        desc: docsFiles[pointer + 1]
                            ? this.getDesc(
                                  './' +
                                      docsFiles[pointer + 1].replace(
                                          process.cwd() + '/',
                                          '',
                                      ),
                              )
                            : '',
                    },
                    meta: `
                    <link rel="prev" href="/${docsFiles[pointer - 1] ? this.convertLinkToCleanURL(docsFiles[pointer - 1]) : ''}" />
                    <link rel="next" href="/${docsFiles[pointer + 1] ? this.convertLinkToCleanURL(docsFiles[pointer + 1]) : ''}" />
                    `,
                    ldjson: JSON.stringify(
                        {
                            '@context': 'https://schema.org',
                            '@type': 'WebPage',
                            name: title,
                            breadcrumb: {
                                '@type': 'BreadcrumbList',
                                itemListElement: [
                                    {
                                        '@type': 'ListItem',
                                        position: 1,
                                        name: 'Previous Page',
                                        item:
                                            '/' +
                                            (docsFiles[pointer - 1]
                                                ? this.convertLinkToCleanURL(
                                                      docsFiles[pointer - 1],
                                                  )
                                                : ''),
                                    },
                                    {
                                        '@type': 'ListItem',
                                        position: 2,
                                        name: 'Current Page',
                                        item:
                                            '/docs/' +
                                            this.convertLinkToCleanURL(
                                                pathFile,
                                            ),
                                    },
                                    {
                                        '@type': 'ListItem',
                                        position: 3,
                                        name: 'Next Page',
                                        item:
                                            '/' +
                                            (docsFiles[pointer + 1]
                                                ? this.convertLinkToCleanURL(
                                                      docsFiles[pointer + 1],
                                                  )
                                                : ''),
                                    },
                                ],
                            },
                        },
                        null,
                        4,
                    ),
                    data: await this.getDocsStrutucture(file),
                };

                pointer++;
            }
        }

        await fs.writeFileSync(
            'docs/index.json',
            JSON.stringify(index, null, 4),
        );

        await fs.writeFileSync(
            'docs/indexLinks.json',
            JSON.stringify(indexLink, null, 4),
        );
    }

    getTitle(file) {
        const content = fs.readFileSync(path.resolve(file), 'utf-8');

        const regex = /<h1[^>]*>(.*?)<\/h1>/i;
        const match = content.match(regex);

        if (match && match[1]) return match[1];

        return null;
    }

    getDesc(file) {
        const content = fs
            .readFileSync(path.resolve(file), 'utf-8')
            .replace(/<h1>.*?<\/a>\n<p>/, '');
        const textOnly = content.replace(/<[^>]*>/g, '');
        const dec = textOnly.substring(0, 80).trim() + '...';
        return dec;
    }

    convertLinkToCleanURL(link: string): string {
        const decodedLink = decodeURIComponent(
            link
                .replace(process.cwd(), '')
                .replace('/docs/', '')
                .replace(/\\/g, '/')
                .replace('.html', ''),
        );

        const pathParts = decodedLink.split('/');

        const cleanPathParts = pathParts.map(part => {
            const cleanPart = part
                .replace(/\d+\s*-\s*/g, '')
                .replace(/\s+/g, '-')
                .replace(/[^\w\-]+/g, '')
                .toLowerCase();

            return cleanPart;
        });

        const cleanURL = cleanPathParts.filter(Boolean).join('/');
        return cleanURL;
    }

    fixLinks(html: string): string {
        const regex = /<a([^>]*)>/gi;
        const replacement = '<a$1 target="_blank" rel="nofollow">';
        const modifiedHtml = html.replace(regex, replacement);
        return modifiedHtml;
    }

    addAnchorLinks(html: string): string {
        const headerTags = ['h1', 'h2'];
        const modifiedHtml = headerTags.reduce((html, tag) => {
            const regex = new RegExp(`(<${tag}[^>]*>)(.*?)(<\/${tag}>)`, 'gi');
            const matches = html.match(regex);

            if (matches) {
                matches.forEach(match => {
                    const text = match.replace(/<\/?[^>]+(>|$)/g, '');
                    const id = text
                        .toLowerCase()
                        .replace(/\s/g, '-')
                        .replace(/\s+/g, '-')
                        .replace(/[^\w-]+/g, '');
                    const anchorLink = `<a id="${id}" title="${text}"></a>`;
                    html = html.replace(match, `${match}${anchorLink}`);
                });
            }

            return html;
        }, html);

        return modifiedHtml;
    }

    extractHierarchy(htmlContent: string): any {
        const hierarchy = {
            lvl0: '',
            lvl1: '',
            lvl2: '',
            lvl3: '',
            lvl4: '',
            lvl5: '',
            lvl6: '',
        };

        const lvl0Match = htmlContent.match(/<h1>(.*?)<\/h1>/);
        const lvl1Match = htmlContent.match(/<h2>(.*?)<\/h2>/);
        const lvl2Match = htmlContent.match(/<h3>(.*?)<\/h3>/);

        if (lvl0Match) hierarchy.lvl0 = lvl0Match[1];
        if (lvl1Match) hierarchy.lvl1 = lvl1Match[1];
        if (lvl2Match) hierarchy.lvl2 = lvl2Match[1];

        return hierarchy;
    }

    cleanContentForAlgolia(htmlContent: string): string {
        return htmlContent
            .replace(/<\/?[^>]+(>|$)/g, '')
            .replace(/\s+/g, ' ')
            .trim();
    }

    async generateSitemap() {
        const docsFiles = await glob(['./docs/**/*.html', './docs/*.html']);
        const baseUrl = 'https://ui.cmmv.io';
        let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
        sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

        sitemap += `  <url>\n`;
        sitemap += `    <loc>${baseUrl}</loc>\n`;
        sitemap += `    <changefreq>weekly</changefreq>\n`;
        sitemap += `  </url>\n`;

        for (let file of docsFiles) {
            if (!file.includes('README') && !file.includes('node_modules')) {
                const pathFile = encodeURIComponent(
                    file.replace(process.cwd(), '').replace(/\\/g, '/'),
                ).replace('.html', '');
                const url = this.convertLinkToCleanURL(pathFile);

                sitemap += `  <url>\n`;
                sitemap += `    <loc>${baseUrl}/${url}</loc>\n`;
                sitemap += `    <changefreq>weekly</changefreq>\n`;
                sitemap += `  </url>\n`;
            }
        }

        sitemap += `</urlset>`;
        await fs.writeFileSync('public/sitemap.xml', sitemap, 'utf8');
    }

    async getDocsStrutucture(file = null) {
        let strutucture = {
            index: '',
            navbar: [],
            breadcrumb: [],
            anchors: [],
            link: file?.replace(cwd(), ''),
            links: {},
        };

        const filesAndDirsIndex = await fg(
            path.resolve(process.cwd(), './docs/*'),
            {
                dot: false,
                onlyFiles: false,
                ignore: ['./docs/index.html'],
            },
        );

        if (file) {
            const pathDivider = process.platform === 'win32' ? '\\' : '/';
            const [root, content] = file
                .replace(path.join(process.cwd(), '/docs/'), '')
                .split(pathDivider);
            strutucture.breadcrumb[0] = root.split('-')[1]?.trim();

            if (typeof content == 'string')
                strutucture.breadcrumb[1] = content.split('-')[1]?.trim();

            if (
                strutucture.breadcrumb[0] &&
                strutucture.breadcrumb[0].includes('.')
            )
                strutucture.breadcrumb[0] =
                    strutucture.breadcrumb[0].split('.')[0];

            if (
                strutucture.breadcrumb[1] &&
                strutucture.breadcrumb[1].includes('.')
            )
                strutucture.breadcrumb[1] =
                    strutucture.breadcrumb[1].split('.')[0];
        }

        strutucture.index = file
            ? fs.readFileSync(path.resolve(file), 'utf8')
            : fs.readFileSync(path.resolve('./docs/index.html'), 'utf8');

        for (let fileOrDir of filesAndDirsIndex) {
            try {
                let basename = path.basename(fileOrDir);
                let [indexRaw, nameRaw] = basename.split('-');
                let index = parseInt(indexRaw.trim());
                let name = nameRaw?.includes('.')
                    ? nameRaw.split('.')[0]?.trim()
                    : nameRaw?.trim();
                const isDir = fs.lstatSync(fileOrDir).isDirectory();

                if (index <= 0) index = 1;

                if (name && !strutucture.navbar[index - 1]) {
                    strutucture.navbar[index - 1] = {
                        filename: fileOrDir,
                        uri: '/docs/' + this.convertLinkToCleanURL(fileOrDir),
                        isDir,
                        index: index,
                        name: name,
                        children: [],
                    };

                    if (isDir) {
                        const filesChildren = await fg(`${fileOrDir}/*.html`, {
                            dot: false,
                            onlyFiles: true,
                        });

                        for (let children of filesChildren) {
                            let basenameChildren = path.basename(children);
                            let [indexRawChildren, nameRawChildren] =
                                basenameChildren.split('-');
                            let indexChildren = parseInt(
                                indexRawChildren.trim(),
                            );
                            let nameChildren = nameRawChildren.includes('.')
                                ? nameRawChildren.split('.')[0]?.trim()
                                : nameRawChildren?.trim();

                            strutucture.navbar[index - 1].children.push({
                                filename: children,
                                uri:
                                    '/docs/' +
                                    this.convertLinkToCleanURL(children),
                                name: nameChildren,
                            });
                        }
                    }
                }
            } catch (e) {
                console.log(e);
            }
        }

        if (strutucture.index) {
            const regex = /<h[1-4]>(.*?)<\/.*?<a id="(.*?)".*?>/g;
            let match;

            while ((match = regex.exec(strutucture.index)) !== null) {
                strutucture.anchors.push({
                    id: match[2],
                    label: match[1],
                });
            }
        }

        return strutucture;
    }

    uppercaseFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    fixedLabel(value) {
        return value
            ? this.uppercaseFirstLetter(
                  value === null || value === void 0
                      ? void 0
                      : value.replace(/([A-Z])/g, ' $1'),
              )
            : '';
    }
}

(async () => {
    let generator = new GenerateDocs();
    await generator.convertMarkdownToHTML();
    //await generator.generateIndex();
    //await generator.generateSitemap();
})();
