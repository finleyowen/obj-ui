[obj-ui](../README.md) / [Modules](../modules.md) / [page](../modules/page.md) / Head

# Class: Head

[page](../modules/page.md).Head

Represents a `head` html element

## Hierarchy

- [`Component`](component.Component.md)

  ↳ **`Head`**

## Table of contents

### Constructors

- [constructor](page.Head.md#constructor)

### Properties

- [children](page.Head.md#children)
- [props](page.Head.md#props)
- [tag](page.Head.md#tag)

### Methods

- [build](page.Head.md#build)
- [child](page.Head.md#child)
- [id](page.Head.md#id)
- [prop](page.Head.md#prop)
- [text](page.Head.md#text)
- [utf8](page.Head.md#utf8)
- [viewport](page.Head.md#viewport)

## Constructors

### constructor

• **new Head**()

#### Overrides

[Component](component.Component.md).[constructor](component.Component.md#constructor)

#### Defined in

[page.ts:102](https://github.com/finleyowen/obj-ui/blob/d2aecf8/src/page.ts#L102)

## Properties

### children

• **children**: [`Component`](component.Component.md)[]

#### Inherited from

[Component](component.Component.md).[children](component.Component.md#children)

#### Defined in

[component.ts:7](https://github.com/finleyowen/obj-ui/blob/d2aecf8/src/component.ts#L7)

___

### props

• **props**: `ComponentProp`[]

Key, value pairs rendered as attributes (eg, `key="value" `) on the html element this component represents

#### Inherited from

[Component](component.Component.md).[props](component.Component.md#props)

#### Defined in

[component.ts:6](https://github.com/finleyowen/obj-ui/blob/d2aecf8/src/component.ts#L6)

___

### tag

• `Optional` **tag**: `string`

The tag of the html element this component represents

#### Inherited from

[Component](component.Component.md).[tag](component.Component.md#tag)

#### Defined in

[component.ts:4](https://github.com/finleyowen/obj-ui/blob/d2aecf8/src/component.ts#L4)

## Methods

### build

▸ **build**(): `string`

Generates and returns a html string of this component

#### Returns

`string`

html code generated for this component.

#### Inherited from

[Component](component.Component.md).[build](component.Component.md#build)

#### Defined in

[component.ts:58](https://github.com/finleyowen/obj-ui/blob/d2aecf8/src/component.ts#L58)

___

### child

▸ **child**(`tag`, `cb`): [`Head`](page.Head.md)

Creates a new child component inside this component

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag` | `string` | The tag of the html element represented by the child. |
| `cb` | (`component`: [`Component`](component.Component.md)) => `void` | A function which accepts a new component (the child). This function doesn't need to return a value. |

#### Returns

[`Head`](page.Head.md)

The updated parent component (this)

#### Inherited from

[Component](component.Component.md).[child](component.Component.md#child)

#### Defined in

[component.ts:36](https://github.com/finleyowen/obj-ui/blob/d2aecf8/src/component.ts#L36)

___

### id

▸ **id**(`id`): `void`

Gives the component an id prop

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The component's `id` prop |

#### Returns

`void`

#### Inherited from

[Component](component.Component.md).[id](component.Component.md#id)

#### Defined in

[component.ts:26](https://github.com/finleyowen/obj-ui/blob/d2aecf8/src/component.ts#L26)

___

### prop

▸ **prop**(`key`, `value`): [`Head`](page.Head.md)

Adds a prop to this component

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string` |

#### Returns

[`Head`](page.Head.md)

the updated component

#### Inherited from

[Component](component.Component.md).[prop](component.Component.md#prop)

#### Defined in

[component.ts:17](https://github.com/finleyowen/obj-ui/blob/d2aecf8/src/component.ts#L17)

___

### text

▸ **text**(`value`): [`Head`](page.Head.md)

Inserts text between this component's children. Note that all components and text are rendered in the order they're created in.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

[`Head`](page.Head.md)

The updated parent component (this)

#### Inherited from

[Component](component.Component.md).[text](component.Component.md#text)

#### Defined in

[component.ts:48](https://github.com/finleyowen/obj-ui/blob/d2aecf8/src/component.ts#L48)

___

### utf8

▸ **utf8**(): `void`

Sets the charset of the

#### Returns

`void`

#### Defined in

[page.ts:96](https://github.com/finleyowen/obj-ui/blob/d2aecf8/src/page.ts#L96)

___

### viewport

▸ **viewport**(): `void`

Sets the viewport meta tag

#### Returns

`void`

#### Defined in

[page.ts:89](https://github.com/finleyowen/obj-ui/blob/d2aecf8/src/page.ts#L89)
