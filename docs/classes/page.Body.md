[obj-ui](../README.md) / [Modules](../modules.md) / [page](../modules/page.md) / Body

# Class: Body

[page](../modules/page.md).Body

Represents a `body` html element

## Hierarchy

- [`Component`](component.Component.md)

  ↳ **`Body`**

## Table of contents

### Constructors

- [constructor](page.Body.md#constructor)

### Properties

- [children](page.Body.md#children)
- [listeners](page.Body.md#listeners)
- [props](page.Body.md#props)
- [tag](page.Body.md#tag)

### Methods

- [build](page.Body.md#build)
- [child](page.Body.md#child)
- [id](page.Body.md#id)
- [on](page.Body.md#on)
- [prop](page.Body.md#prop)
- [text](page.Body.md#text)

## Constructors

### constructor

• **new Body**()

#### Overrides

[Component](component.Component.md).[constructor](component.Component.md#constructor)

#### Defined in

[page.ts:80](https://github.com/finleyowen/obj-ui/blob/3898f58/src/page.ts#L80)

## Properties

### children

• **children**: [`Component`](component.Component.md)[]

#### Inherited from

[Component](component.Component.md).[children](component.Component.md#children)

#### Defined in

[component.ts:7](https://github.com/finleyowen/obj-ui/blob/3898f58/src/component.ts#L7)

___

### listeners

• **listeners**: `EventListener`[]

Objects that will be compiled into event listeners in the built code

#### Defined in

[page.ts:59](https://github.com/finleyowen/obj-ui/blob/3898f58/src/page.ts#L59)

___

### props

• **props**: `ComponentProp`[]

Key, value pairs rendered as attributes (eg, `key="value" `) on the html element this component represents

#### Inherited from

[Component](component.Component.md).[props](component.Component.md#props)

#### Defined in

[component.ts:6](https://github.com/finleyowen/obj-ui/blob/3898f58/src/component.ts#L6)

___

### tag

• `Optional` **tag**: `string`

The tag of the html element this component represents

#### Inherited from

[Component](component.Component.md).[tag](component.Component.md#tag)

#### Defined in

[component.ts:4](https://github.com/finleyowen/obj-ui/blob/3898f58/src/component.ts#L4)

## Methods

### build

▸ **build**(): `string`

Creates the html string to represent this body's content

#### Returns

`string`

#### Overrides

[Component](component.Component.md).[build](component.Component.md#build)

#### Defined in

[page.ts:67](https://github.com/finleyowen/obj-ui/blob/3898f58/src/page.ts#L67)

___

### child

▸ **child**(`tag`, `cb`): [`Body`](page.Body.md)

Creates a new child component inside this component

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag` | `string` | The tag of the html element represented by the child. |
| `cb` | (`component`: [`Component`](component.Component.md)) => `void` | A function which accepts a new component (the child). This function doesn't need to return a value. |

#### Returns

[`Body`](page.Body.md)

The updated parent component (this)

#### Inherited from

[Component](component.Component.md).[child](component.Component.md#child)

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

#### Inherited from

[Component](component.Component.md).[id](component.Component.md#id)

#### Defined in

[component.ts:26](https://github.com/finleyowen/obj-ui/blob/3898f58/src/component.ts#L26)

___

### on

▸ **on**(`listener`): `void`

Adds an event listener to this body

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | `EventListener` |

#### Returns

`void`

#### Defined in

[page.ts:62](https://github.com/finleyowen/obj-ui/blob/3898f58/src/page.ts#L62)

___

### prop

▸ **prop**(`key`, `value`): [`Body`](page.Body.md)

Adds a prop to this component

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string` |

#### Returns

[`Body`](page.Body.md)

the updated component

#### Inherited from

[Component](component.Component.md).[prop](component.Component.md#prop)

#### Defined in

[component.ts:17](https://github.com/finleyowen/obj-ui/blob/3898f58/src/component.ts#L17)

___

### text

▸ **text**(`value`): [`Body`](page.Body.md)

Inserts text between this component's children. Note that all components and text are rendered in the order they're created in.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

[`Body`](page.Body.md)

The updated parent component (this)

#### Inherited from

[Component](component.Component.md).[text](component.Component.md#text)

#### Defined in

[component.ts:48](https://github.com/finleyowen/obj-ui/blob/3898f58/src/component.ts#L48)
