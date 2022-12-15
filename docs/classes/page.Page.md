[obj-ui](../README.md) / [Modules](../modules.md) / [page](../modules/page.md) / Page

# Class: Page

[page](../modules/page.md).Page

Represents a html file

## Table of contents

### Constructors

- [constructor](page.Page.md#constructor)

### Properties

- [body](page.Page.md#body)
- [head](page.Page.md#head)
- [lang](page.Page.md#lang)
- [name](page.Page.md#name)

### Methods

- [build](page.Page.md#build)
- [setLang](page.Page.md#setlang)

## Constructors

### constructor

• **new Page**(`name`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Defined in

[page.ts:32](https://github.com/finleyowen/obj-ui/blob/d7bb1f5/src/page.ts#L32)

## Properties

### body

• **body**: [`Body`](page.Body.md)

The html file's `head` tag

#### Defined in

[page.ts:10](https://github.com/finleyowen/obj-ui/blob/d7bb1f5/src/page.ts#L10)

___

### head

• **head**: [`Head`](page.Head.md)

The html file's `head` tag

#### Defined in

[page.ts:8](https://github.com/finleyowen/obj-ui/blob/d7bb1f5/src/page.ts#L8)

___

### lang

• `Optional` **lang**: `string`

The `html` tag's `lang` attribute (you can also set this on the App object, which will automatically set it for all pages)

#### Defined in

[page.ts:12](https://github.com/finleyowen/obj-ui/blob/d7bb1f5/src/page.ts#L12)

___

### name

• **name**: `string`

The name of the html file to generate

#### Defined in

[page.ts:6](https://github.com/finleyowen/obj-ui/blob/d7bb1f5/src/page.ts#L6)

## Methods

### build

▸ **build**(): `string`

Returns a string of html, which is written into the file this page generates

#### Returns

`string`

#### Defined in

[page.ts:23](https://github.com/finleyowen/obj-ui/blob/d7bb1f5/src/page.ts#L23)

___

### setLang

▸ **setLang**(`lang`): `void`

Sets the value of the `lang` attribute of the `html` element (eg, `<html lang="en">`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lang` | `string` | the value to set the `lang` attribute |

#### Returns

`void`

#### Defined in

[page.ts:18](https://github.com/finleyowen/obj-ui/blob/d7bb1f5/src/page.ts#L18)
