export default class Component {
    tag: string;
    props?: ComponentProp[];
    children?: Component[];
    innerText?: string;
    css?: string;

    prop(key: string, value: string) {
        this.props === undefined ? (this.props = [{ key, value }]) : this.props.push({ key, value });
        return this;
    }

    child(tag: string, config?: ComponentConfig) {
        let component = new Component(tag, config);
        this.children === undefined ? (this.children = [component]) : this.children.push(component);
        return this;
    }

    text(value: string) {
        this.innerText = value;
        this.tag = 'text';
    }

    style(styleString: string) {
        this.css = styleString;
    }

    build(): string {
        let html = `<${this.tag}`;
        if (this.props != undefined) {
            for (var prop of this.props) {
                html += ` ${prop.key}="${prop.value}" `;
            }
        }
        html += `>`;
        if (this.innerText != undefined) {
            html += this.innerText;
        } else {
            if (this.children != undefined) {
                for (var child of this.children) {
                    html += child.build();
                }
            }
        }
        html += `</${this.tag}>`;
        return html;
    }

    constructor(tag: string, config?: ComponentConfig) {
        this.tag = tag;
        this.props = config?.props;
        this.children = config?.children;
        this.innerText = config?.innerText;
    }
}

interface ComponentProp {
    key: string;
    value: string;
}

interface ComponentConfig {
    props?: ComponentProp[];
    children?: Component[];
    style?: string;
    innerText?: string;
}
