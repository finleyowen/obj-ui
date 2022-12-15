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

[page.ts:85](https://github.com/finleyowen/obj-ui/blob/d7bb1f5/src/page.ts#L85)

## Properties

### children

• **children**: [`Component`](component.Component.md)[]

Components nested inside this component

#### Inherited from

[Component](component.Component.md).[children](component.Component.md#children)

#### Defined in

[component.ts:8](https://github.com/finleyowen/obj-ui/blob/d7bb1f5/src/component.ts#L8)

___

### props

• **props**: `ComponentProp`[]

Key, value pairs rendered as props (eg, `key="value" `) on the html element this component represents

#### Inherited from

[Component](component.Component.md).[props](component.Component.md#props)

#### Defined in

[component.ts:6](https://github.com/finleyowen/obj-ui/blob/d7bb1f5/src/component.ts#L6)

___

### tag

• `Optional` **tag**: `string`

The tag of the html element this component represents

#### Inherited from

[Component](component.Component.md).[tag](component.Component.md#tag)

#### Defined in

[component.ts:4](https://github.com/finleyowen/obj-ui/blob/d7bb1f5/src/component.ts#L4)

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

[component.ts:51](https://github.com/finleyowen/obj-ui/blob/d7bb1f5/src/component.ts#L51)

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

[component.ts:29](https://github.com/finleyowen/obj-ui/blob/d7bb1f5/src/component.ts#L29)

___

### id

▸ **id**(`id`): `void`

Gives the component an id prop

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Inherited from

[Component](component.Component.md).[id](component.Component.md#id)

#### Defined in

[component.ts:19](https://github.com/finleyowen/obj-ui/blob/d7bb1f5/src/component.ts#L19)

___

### prop

▸ **prop**(`key`, `value`): [`Head`](page.Head.md)

Adds a prop to this `Component`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string` |

#### Returns

[`Head`](page.Head.md)

#### Inherited from

[Component](component.Component.md).[prop](component.Component.md#prop)

#### Defined in

[component.ts:13](https://github.com/finleyowen/obj-ui/blob/d7bb1f5/src/component.ts#L13)

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

[component.ts:41](https://github.com/finleyowen/obj-ui/blob/d7bb1f5/src/component.ts#L41)

___

### utf8

▸ **utf8**(): `void`

Sets the charset of the

#### Returns

`void`

#### Defined in

[page.ts:79](https://github.com/finleyowen/obj-ui/blob/d7bb1f5/src/page.ts#L79)

___

### viewport

▸ **viewport**(): `void`

Sets the viewport meta tag

#### Returns

`void`

#### Defined in

[page.ts:72](https://github.com/finleyowen/obj-ui/blob/d7bb1f5/src/page.ts#L72)
