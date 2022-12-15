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

[component.ts:90](https://github.com/finleyowen/obj-ui/blob/3898f58/src/component.ts#L90)

## Properties

### children

• **children**: [`Component`](component.Component.md)[]

#### Defined in

[component.ts:7](https://github.com/finleyowen/obj-ui/blob/3898f58/src/component.ts#L7)

___

### props

• **props**: `ComponentProp`[]

Key, value pairs rendered as attributes (eg, `key="value" `) on the html element this component represents

#### Defined in

[component.ts:6](https://github.com/finleyowen/obj-ui/blob/3898f58/src/component.ts#L6)

___

### tag

• `Optional` **tag**: `string`

The tag of the html element this component represents

#### Defined in

[component.ts:4](https://github.com/finleyowen/obj-ui/blob/3898f58/src/component.ts#L4)

___

### value

• `Private` `Optional` **value**: `string`

Only defined for components with the `SpecialTags.text` tag. These are the only components that don't represent html elements and you shouldn't interact with them directly for validation purposes; instead, initialise them within the parent component with the `component.text(value: string)` method

#### Defined in

[component.ts:9](https://github.com/finleyowen/obj-ui/blob/3898f58/src/component.ts#L9)

## Methods

### build

▸ **build**(): `string`

Generates and returns a html string of this component

#### Returns

`string`

html code generated for this component.

#### Defined in

[component.ts:58](https://github.com/finleyowen/obj-ui/blob/3898f58/src/component.ts#L58)

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

[component.ts:36](https://github.com/finleyowen/obj-ui/blob/3898f58/src/component.ts#L36)

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

#### Defined in

[component.ts:26](https://github.com/finleyowen/obj-ui/blob/3898f58/src/component.ts#L26)

___

### prop

▸ **prop**(`key`, `value`): [`Component`](component.Component.md)

Adds a prop to this component

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string` |

#### Returns

[`Component`](component.Component.md)

the updated component

#### Defined in

[component.ts:17](https://github.com/finleyowen/obj-ui/blob/3898f58/src/component.ts#L17)

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

[component.ts:48](https://github.com/finleyowen/obj-ui/blob/3898f58/src/component.ts#L48)
