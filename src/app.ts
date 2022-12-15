import * as fs from 'fs';
import * as path from 'path';
import { Page } from './page';

/** Represents a whole website */
export class App {
    /** The `Page`s included in this `App` */
    pages: Page[];
    /** The path to the folder in which this `App` will be built */
    outDir?: string;
    /** Added as a prop to the `<html>` element of each page for HTML5 conformance; eg `<html lang="en">...</html>` */
    lang?: string;

    /**
     * Constructor for the `App` class
     * @param config Configuration options for the new `App`
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
     * Adds a new `Page` to the app
     * @param name The name of the new page and its corresponding `.html` file
     * @param cb Function called on the new page before it's added to this `App`'s `Page`s
     */
    page(name: string, cb: (page: Page) => void) {
        let page = new Page(name);
        if (this.lang) {
            page.prop('lang', this.lang);
        }
        cb(page);
        this.pages.push(page);
    }

    /**
     * Uses `fs` to generate the built `.html` files in the specified `outDir`. If `outDir` is undefined,
     *
     */
    build() {
        if (this.outDir === undefined) {
            this.outDir = path.join(__dirname, '../../');
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
