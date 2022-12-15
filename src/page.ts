import { Component } from './component';

/** Represents a html file */
export class Page {
    /** The name of the html file to generate */
    name: string;
    /** Component representing the html file's `head` tag */
    private headComponent: Head;
    /** Component representing the html file's `body` tag */
    private bodyComponent: Body;
    /** The `html` tag's `lang` attribute (you can also set this for the whole app, which will automatically set it for all pages) */
    private lang?: string;

    /**
     * Gives access to this page's head sectopm through supplied callback function used like this:
     * ```
     * page.head(head => {
     *     head.viewport();
     *     head.utf8();
     *     ...
     * });
     * ```
     */
    head(cb: (_: Head) => void) {
        cb(this.headComponent);
    }

    /**
     * Gives access to this page's body section through supplied callback function used like this:
     * ```
     * page.body(body => {
     *     body.child('div', container => { ... })
     * });
     * ```
     */
    body(cb: (_: Body) => void) {
        cb(this.bodyComponent);
    }

    /**
     * Sets the value of the `lang` attribute of the `html` element like this:
     * ```
     * page.setLang('en') // <html lang="en">...</html>
     * ```
     * You can also set this for the whole app, which will automatically set it for all pages.
     * @param lang the value to set the `lang` attribute
     */
    setLang(lang: string) {
        this.lang = lang;
    }

    /** Returns a string of html, which is written into the file this page generates */
    build(): string {
        let html = '<!DOCTYPE html><html';
        if (this.lang) {
            html += ` lang="${this.lang}"`;
        }
        html += '>' + this.headComponent.build() + this.bodyComponent.build() + '</html>';
        return html;
    }

    constructor(name: string) {
        this.name = name;
        this.headComponent = new Head();
        this.bodyComponent = new Body();
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

/** Object that will be compiled into code to add an event listener to an element in a html `body`. */
export interface EventListener {
    /** The `id` attribute of the element */
    elementId: string;
    /** The event to respond to */
    event: string;
    /** JavaScript code, written **in a string**, to be called on the event */
    call: string;
}
