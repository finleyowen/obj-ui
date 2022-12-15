[obj-ui](../README.md) / [Modules](../modules.md) / [page](../modules/page.md) / Page

# Class: Page

[page](../modules/page.md).Page

Represents a html file

## Table of contents

### Constructors

- [constructor](page.Page.md#constructor)

### Properties

- [bodyComponent](page.Page.md#bodycomponent)
- [headComponent](page.Page.md#headcomponent)
- [lang](page.Page.md#lang)
- [name](page.Page.md#name)

### Methods

- [build](page.Page.md#build)
- [head](page.Page.md#head)
- [setLang](page.Page.md#setlang)

## Constructors

### constructor

• **new Page**(`name`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Defined in

[page.ts:49](https://github.com/finleyowen/obj-ui/blob/d2aecf8/src/page.ts#L49)

## Properties

### bodyComponent

• `Private` **bodyComponent**: [`Body`](page.Body.md)

Component representing the html file's `body` tag

#### Defined in

[page.ts:10](https://github.com/finleyowen/obj-ui/blob/d2aecf8/src/page.ts#L10)

___

### headComponent

• `Private` **headComponent**: [`Head`](page.Head.md)

Component representing the html file's `head` tag

#### Defined in

[page.ts:8](https://github.com/finleyowen/obj-ui/blob/d2aecf8/src/page.ts#L8)

___

### lang

• `Private` `Optional` **lang**: `string`

The `html` tag's `lang` attribute (you can also set this for the whole app, which will automatically set it for all pages)

#### Defined in

[page.ts:12](https://github.com/finleyowen/obj-ui/blob/d2aecf8/src/page.ts#L12)

___

### name

• **name**: `string`

The name of the html file to generate

#### Defined in

[page.ts:6](https://github.com/finleyowen/obj-ui/blob/d2aecf8/src/page.ts#L6)

## Methods

### build

▸ **build**(): `string`

Returns a string of html, which is written into the file this page generates

#### Returns

`string`

#### Defined in

[page.ts:40](https://github.com/finleyowen/obj-ui/blob/d2aecf8/src/page.ts#L40)

___

### head

▸ **head**(`cb`): `void`

Gives access to this page's head component through supplied callback function used like this:
```
page.head(head => {
    head.viewport();
    head.utf8();
});
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`_`: [`Head`](page.Head.md)) => `void` |

#### Returns

`void`

#### Defined in

[page.ts:23](https://github.com/finleyowen/obj-ui/blob/d2aecf8/src/page.ts#L23)

___

### setLang

▸ **setLang**(`lang`): `void`

Sets the value of the `lang` attribute of the `html` element like this:
```
page.setLang('en') // <html lang="en">...</html>
```
You can also set this for the whole app, which will automatically set it for all pages.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lang` | `string` | the value to set the `lang` attribute |

#### Returns

`void`

#### Defined in

[page.ts:35](https://github.com/finleyowen/obj-ui/blob/d2aecf8/src/page.ts#L35)
