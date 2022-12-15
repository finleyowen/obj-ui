import { Component } from './component';

export class Page extends Component {
    name: string;

    head(cb: (_: Head) => void) {
        let head = new Head();
        cb(head);
        this.children.push(head);
        return this;
    }

    body(cb: (_: Body) => void) {
        let body = new Body();
        cb(body);
        this.children.push(body);
    }

    build(): string {
        let html = '<!DOCTYPE html>';
        html += super.build();
        return html;
    }

    constructor(name: string) {
        super('html');
        this.name = name;
    }
}

class Body extends Component {
    listeners: EventListener[];

    on(listener: EventListener) {
        this.listeners.push(listener);
    }

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

class Head extends Component {
    viewport() {
        this.child('meta', (meta) => {
            meta.prop('name', 'viewport');
            meta.prop('content', 'width=device-width, initial-scale=1.0');
        });
    }
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
