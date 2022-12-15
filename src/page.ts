import { Component } from './component';

/** Represents a html file */
export class Page {
    /** The name of the html file to generate */
    name: string;
    /** The html file's `head` tag */
    head: Head;
    /** The html file's `head` tag */
    body: Body;
    /** The `html` tag's `lang` attribute (you can also set this on the App object, which will automatically set it for all pages) */
    lang?: string;

    /**
     * Sets the value of the `lang` attribute of the `html` element (eg, `<html lang="en">`)
     * @param lang the value to set the `lang` attribute
     */
    setLang(lang: string) {
        this.lang = lang
    }

    /** Returns a string of html, which is written into the file this page generates */
    build(): string {
        let html = '<!DOCTYPE html><html';
        if (this.lang) {
            html += ` lang="${this.lang}"`
        }
        html += '>' + this.head.build() + this.body.build() + '</html>';
        return html;
    }

    constructor(name: string) {
        this.name = name
        this.head = new Head()
        this.body = new Body()
    }
}

/** Represents a `body` html element */
export class Body extends Component {
    /** Objects that will be compiled into event listeners in the built code */
    listeners: EventListener[];

    /** Adds an event listener to this body */
    on(listener: EventListener) {
        this.listeners.push(listener);
    }

    /** Creates the html string to represent this body's content */
    build() {
        if (this.listeners.length > 0) {
            this.child('script', (script) => {
                let scriptValue = '';
                for (var listener of this.listeners) {
                    scriptValue += `document.getElementById("${listener.elementId}").addEventListener("${listener.event}", ${listener.call})`;
                }
                script.text(scriptValue);
            });
        }
        return super.build();
    }

    constructor() {
        super('body');
        this.listeners = [];
    }
}

/** Represents a `head` html element */
export class Head extends Component {
    /** Sets the viewport meta tag */
    viewport() {
        this.child('meta', (meta) => {
            meta.prop('name', 'viewport');
            meta.prop('content', 'width=device-width, initial-scale=1.0');
        });
    }
    /** Sets the charset of the  */
    utf8() {
        this.child('meta', (meta) => {
            meta.prop('charset', 'utf-8');
        });
    }

    constructor() {
        super('head');
    }
}

interface EventListener {
    elementId: string;
    event: string;
    call: string;
}
