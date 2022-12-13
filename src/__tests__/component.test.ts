import Component from '../component';

test('Component', () => {
    let component = new Component('div');
    expect(component.build()).toBe('<div></div>');
});

test('Component with child', () => {
    let component = new Component('div');
    component.child('p');
    expect(component.build()).toBe('<div><p></p></div>');
});

test('Component with child with text', () => {
    let component = new Component('div');
    component.child('p', { innerText: 'Hello' })
    expect(component.build()).toBe('<div><p>Hello</p></div>');
});
