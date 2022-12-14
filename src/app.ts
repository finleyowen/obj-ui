import * as fs from 'fs';
import * as path from 'path';
import { Page } from './page';

/** Represents a static website */
export class App {
    /** The pages included in this app */
    pages: Page[];
    /** The path to the folder in which this app will be built */
    outDir?: string;
    /** Added as an attribute to the `html` element of each page for HTML5 conformance; eg `<html lang="en">...</html>` */
    lang?: string;

    /**
     * Constructor for the `App` class
     * @param config Configuration object for the app
     */
    constructor(config?: AppConfig) {
        if (config?.pages) {
            this.pages = config.pages;
        } else {
            this.pages = [];
        }
        this.outDir = config?.outDir;
        this.lang = config?.lang;
    }

    /**
     * Adds a new page to the app
     * @param name The name of the new page and its corresponding html file
     * @param cb Gives access to this page for usage like this:
     * ```
     * app.page('index', index => {
     *     index.head(head => { ... })
     * })
     * ```
     */
    page(name: string, cb: (page: Page) => void) {
        let page = new Page(name);
        if (this.lang) {
            page.setLang(this.lang);
        }
        cb(page);
        this.pages.push(page);
    }

    /** Uses `fs` to generate the built html files in the specified directory (`this.outDir`). If `this.outDir` is undefined, the html files are generated in a `/build` folder in the project's root directory. */
    build() {
        if (this.outDir === undefined) {
            this.outDir = path.join(__dirname, '../../build');
        }
        if (!fs.existsSync(this.outDir)) {
            fs.mkdirSync(this.outDir, { recursive: true });
        }
        for (var page of this.pages) {
            let fileName = page.name + '.html';
            let pathToFile = path.join(this.outDir, fileName);
            fs.writeFile(pathToFile, page.build(), (err) => {
                if (err) {
                    throw err;
                }
                console.log(pathToFile);
            });
        }
    }
}

export interface AppConfig {
    pages?: Page[];
    outDir?: string;
    inDir?: string;
    lang?: string;
}
