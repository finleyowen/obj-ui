[obj-ui](../README.md) / [Modules](../modules.md) / [app](../modules/app.md) / App

# Class: App

[app](../modules/app.md).App

Represents a static website

## Table of contents

### Constructors

- [constructor](app.App.md#constructor)

### Properties

- [lang](app.App.md#lang)
- [outDir](app.App.md#outdir)
- [pages](app.App.md#pages)

### Methods

- [build](app.App.md#build)
- [page](app.App.md#page)

## Constructors

### constructor

• **new App**(`config?`)

Constructor for the `App` class

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config?` | [`AppConfig`](../interfaces/app.AppConfig.md) | Configuration options for the new `App` |

#### Defined in

[app.ts:18](https://github.com/finleyowen/obj-ui/blob/d7bb1f5/src/app.ts#L18)

## Properties

### lang

• `Optional` **lang**: `string`

Added as a prop to the `<html>` element of each page for HTML5 conformance; eg `<html lang="en">...</html>`

#### Defined in

[app.ts:12](https://github.com/finleyowen/obj-ui/blob/d7bb1f5/src/app.ts#L12)

___

### outDir

• `Optional` **outDir**: `string`

The path to the folder in which this `App` will be built

#### Defined in

[app.ts:10](https://github.com/finleyowen/obj-ui/blob/d7bb1f5/src/app.ts#L10)

___

### pages

• **pages**: [`Page`](page.Page.md)[]

The `Page`s included in this `App`

#### Defined in

[app.ts:8](https://github.com/finleyowen/obj-ui/blob/d7bb1f5/src/app.ts#L8)

## Methods

### build

▸ **build**(): `void`

Uses `fs` to generate the built `.html` files in the specified `outDir`. If `outDir` is undefined, the `.html` files are generated in a `build` folder in the project's root directory.

#### Returns

`void`

#### Defined in

[app.ts:43](https://github.com/finleyowen/obj-ui/blob/d7bb1f5/src/app.ts#L43)

___

### page

▸ **page**(`name`, `cb`): `void`

Adds a new `Page` to the app

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the new page and its corresponding `.html` file |
| `cb` | (`page`: [`Page`](page.Page.md)) => `void` | Function called on the new page before it's added to this `App`'s `Page`s |

#### Returns

`void`

#### Defined in

[app.ts:33](https://github.com/finleyowen/obj-ui/blob/d7bb1f5/src/app.ts#L33)
