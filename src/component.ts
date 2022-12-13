export default class Component {
    tag: string;
    props: ComponentProp[];
    children: Component[];
    innerText?: string
    css?: string;

    prop(key: string, value: string) {
        this.props.push({ key, value })
        return this
    }

    child(tag: string) {
        let component = new Component(tag)
        this.children.push(component)
        return this
    }

    text(value: string) {
        this.innerText = value;
        this.tag = 'text'
    }

    style(styleString: string) {
        this.css = styleString
    }

    build(): string {
        let html = `<${this.tag}`
        if (this.props.length > 0) {
            for (var prop of this.props) {
                html += ` ${prop.key}="${prop.value}" `
            }
        }
        html += `>`
        if (this.tag == 'text') {
            html += this.innerText
        } else {
            if (this.children.length > 0) {
                for (var child of this.children) {
                    html += child.build()
                }
            }
        }
        html += `</${this.tag}>`
        return html
    }

    constructor(tag: string, config?: ComponentConfig) {
        this.tag = tag
        this.props = [];
        this.children = [];
    }
}

interface ComponentProp {
    key: string;
    value: string
}

interface ComponentConfig {
    props?: ComponentProp[];
    children?: Component[];
    style?: string;
}