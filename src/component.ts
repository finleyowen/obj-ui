/** Represents a single `html` element */
export class Component {
    /** The tag of the element this `Component` represents */
    tag?: string | SpecialTags;
    /** Key, value pairs rendered as props on the element this `Component` represents */
    props: ComponentProp[];
    /** `Component`s nested inside this `Component` */
    children: Component[];

    private value?: string;

    /** Adds a prop to this `Component` */
    prop(key: string, value: string) {
        this.props.push({ key, value });
        return this;
    }

    /** G */
    id(id: string) {
        this.prop('id', id);
    }

    child(tag: string, cb: (component: Component) => void) {
        let component = new Component(tag);
        cb(component);
        this.children.push(component);
        return this;
    }

    text(value: string) {
        let text = new Component(SpecialTags.text, value);
        this.children.push(text);
        return this;
    }

    build(): string {
        var html = '';
        switch (this.tag) {
            case SpecialTags.text:
                return this.value || '';
            case SpecialTags.meta:
                html += `<${this.tag}`;
                if (this.props.length > 0) {
                    for (var prop of this.props) {
                        html += ` ${prop.key}="${prop.value}"`;
                    }
                }
                html += `>`;
                return html;
            default:
                html += `<${this.tag}`;
                if (this.props.length > 0) {
                    for (var prop of this.props) {
                        html += ` ${prop.key}="${prop.value}"`;
                    }
                }
                html += `>`;
                if (this.children.length > 0) {
                    for (var child of this.children) {
                        html += child.build();
                    }
                }
                html += `</${this.tag}>`;
                return html;
        }
    }

    constructor(tag: string, value?: string) {
        this.tag = tag;
        this.value = value;
        this.props = [];
        this.children = [];
    }
}

interface ComponentProp {
    key: string;
    value: string;
}

export enum SpecialTags {
    text = 'text',
    head = 'head',
    meta = 'meta',
}
