/** Represents a html element */
export class Component {
    /** The tag of the html element this component represents */
    tag?: string | SpecialTags;
    /** Key, value pairs rendered as props (eg, `key="value" `) on the html element this component represents */
    props: ComponentProp[];
    /** Components nested inside this component */
    children: Component[];
    /** Only defined for components of the `SpecialTags.text` tag, the only tag that doesn't represent a html element. You shouldn't interact with this component directly for validation purposes; instead, initialise it with the `text(value: string)` method */
    private value?: string;

    /** Adds a prop to this `Component` */
    prop(key: string, value: string) {
        this.props.push({ key, value });
        return this;
    }

    /** Gives the component an id prop */
    id(id: string) {
        this.prop('id', id);
    }

    /**
     * Creates a new child component inside this component
     * @param tag The tag of the html element represented by the child.
     * @param cb A function which accepts a new component (the child). This function doesn't need to return a value.
     * @returns The updated parent component (this)
     */
    child(tag: string, cb: (component: Component) => void) {
        let component = new Component(tag);
        cb(component);
        this.children.push(component);
        return this;
    }

    /**
     * Inserts text between this component's children. Note that all components and text are rendered in the order they're created in.
     * @param value 
     * @returns The updated parent component (this)
     */
    text(value: string) {
        let text = new Component(SpecialTags.text, value);
        this.children.push(text);
        return this;
    }

    /**
     * Generates and returns a html string of this component
     * @returns html code generated for this component.
     */
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
