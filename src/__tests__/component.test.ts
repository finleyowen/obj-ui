import { Component } from '../component';

test('Component', () => {
    expect(new Component('p').build()).toBe('<p></p>');
});

test('Component with text', () => {
    expect(new Component('p').text('Hello, world!').build()).toBe('<p>Hello, world!</p>');
});

test('Componet with text and child with text', () => {
    let component = new Component('p');
    component.text('Hello, ');
    component.child('b', (bold) => {
        bold.text('world!');
    });
    expect(component.build()).toBe('<p>Hello, <b>world!</b></p>');
});

test('Componet with text, prop, and child with text', () => {
    let component = new Component('p');
    component.prop('style', 'font-family: Helvetica Neue,Helvetica,Arial,sans-serif;');
    component.text('Hello, ');
    component.child('b', (bold) => {
        bold.text('world!');
    });
    expect(component.build()).toBe(
        '<p style="font-family: Helvetica Neue,Helvetica,Arial,sans-serif;">Hello, <b>world!</b></p>',
    );
});

test('Componet with text, prop, and child with text and prop', () => {
    let component = new Component('p');
    component.prop('style', 'font-family: Helvetica Neue,Helvetica,Arial,sans-serif;');
    component.text('Hello, ');
    component.child('b', (bold) => {
        bold.prop('style', 'color: red');
        bold.text('world!');
    });
    expect(component.build()).toBe(
        '<p style="font-family: Helvetica Neue,Helvetica,Arial,sans-serif;">Hello, <b style="color: red">world!</b></p>',
    );
});
