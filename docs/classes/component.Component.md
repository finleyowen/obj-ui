[obj-ui](../README.md) / [Modules](../modules.md) / [component](../modules/component.md) / Component

# Class: Component

[component](../modules/component.md).Component

Represents a html element

## Hierarchy

- **`Component`**

  ↳ [`Body`](page.Body.md)

  ↳ [`Head`](page.Head.md)

## Table of contents

### Constructors

- [constructor](component.Component.md#constructor)

### Properties

- [children](component.Component.md#children)
- [props](component.Component.md#props)
- [tag](component.Component.md#tag)
- [value](component.Component.md#value)

### Methods

- [build](component.Component.md#build)
- [child](component.Component.md#child)
- [id](component.Component.md#id)
- [prop](component.Component.md#prop)
- [text](component.Component.md#text)

## Constructors

### constructor

• **new Component**(`tag`, `value?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `string` |
| `value?` | `string` |

#### Defined in

[component.ts:83](https://github.com/finleyowen/obj-ui/blob/d7bb1f5/src/component.ts#L83)

## Properties

### children

• **children**: [`Component`](component.Component.md)[]

Components nested inside this component

#### Defined in

[component.ts:8](https://github.com/finleyowen/obj-ui/blob/d7bb1f5/src/component.ts#L8)

___

### props

• **props**: `ComponentProp`[]

Key, value pairs rendered as props (eg, `key="value" `) on the html element this component represents

#### Defined in

[component.ts:6](https://github.com/finleyowen/obj-ui/blob/d7bb1f5/src/component.ts#L6)

___

### tag

• `Optional` **tag**: `string`

The tag of the html element this component represents

#### Defined in

[component.ts:4](https://github.com/finleyowen/obj-ui/blob/d7bb1f5/src/component.ts#L4)

___

### value

• `Private` `Optional` **value**: `string`

Only defined for components of the `SpecialTags.text` tag, the only tag that doesn't represent a html element. You shouldn't interact with this component directly for validation purposes; instead, initialise it with the `text(value: string)` method

#### Defined in

[component.ts:10](https://github.com/finleyowen/obj-ui/blob/d7bb1f5/src/component.ts#L10)

## Methods

### build

▸ **build**(): `string`

Generates and returns a html string of this component

#### Returns

`string`

html code generated for this component.

#### Defined in

[component.ts:51](https://github.com/finleyowen/obj-ui/blob/d7bb1f5/src/component.ts#L51)

___

### child

▸ **child**(`tag`, `cb`): [`Component`](component.Component.md)

Creates a new child component inside this component

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag` | `string` | The tag of the html element represented by the child. |
| `cb` | (`component`: [`Component`](component.Component.md)) => `void` | A function which accepts a new component (the child). This function doesn't need to return a value. |

#### Returns

[`Component`](component.Component.md)

The updated parent component (this)

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

#### Defined in

[component.ts:19](https://github.com/finleyowen/obj-ui/blob/d7bb1f5/src/component.ts#L19)

___

### prop

▸ **prop**(`key`, `value`): [`Component`](component.Component.md)

Adds a prop to this `Component`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string` |

#### Returns

[`Component`](component.Component.md)

#### Defined in

[component.ts:13](https://github.com/finleyowen/obj-ui/blob/d7bb1f5/src/component.ts#L13)

___

### text

▸ **text**(`value`): [`Component`](component.Component.md)

Inserts text between this component's children. Note that all components and text are rendered in the order they're created in.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

[`Component`](component.Component.md)

The updated parent component (this)

#### Defined in

[component.ts:41](https://github.com/finleyowen/obj-ui/blob/d7bb1f5/src/component.ts#L41)
