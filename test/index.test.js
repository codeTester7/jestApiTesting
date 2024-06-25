const {add, err, newPromise, arr, app} = require('../index');
const superetest = require('supertest');
test('toBe', () => {
    expect(add(1,2)).toBe(3);
});

test('toEqual', () => {
    expect(add(1, 2)).toEqual(3);
});

test('toBeDefined', () => {
    expect(add(1, 2)).toBeDefined();
});

test('not.toBeNull', () => {
    expect(add(1,2)).not.toBeNull();
});

test('GreaterThan', () => {
    expect(add(1,2)).toBeGreaterThan(1);
});

test('not.LessThan', () => {
    expect(add(1,2)).not.toBeLessThan(1);
});

test('CloseTo', () => {
    expect(add(1.1111, 2.4444)).toBeCloseTo(3.5554);
});

test('toMatch', () => {
    expect(add('Hello ', 'World')).toMatch(/Hello/);
});

test('toThrow', () => {
    expect(() => err()).toThrow('I am a new error');
});

test('newPromise', () => {
    newPromise(2,1)
        .then(data => {
            expect(data).toBe('Positive');
        })
        .catch(err => {
            expect(err).toBe('Negative');
        })
})

test('newPromise short for resolve req.', () => {
    expect(newPromise(2,1)).resolves.toBe('Positive');
})

test('newPromise short for reject req.', () => {
    expect(newPromise(1,2)).rejects.toBe('Negative');
});

test('toContain', () => {
    expect(arr()).toContain('Bat');
});

test('TESTING GET users API', async () => {
    await superetest(app)
    .get('/users')
    .expect(200)
    .then(result => {
        expect(result && result.body && typeof result.body === 'object');
    })
})
