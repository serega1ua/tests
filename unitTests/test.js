// toBe() — порівнює примітивні значення.
// toEqual() — порівнює об'єкти чи масиви.
// toContain() — перевіряє наявність елемента в масиві або рядку.
// toThrow() — перевіряє, чи функція викликає помилку.

function add(a, b) {
    return a + b;
  }

  test('Check toBe', () => {
    expect(add(1, 2)).toBe(3);
  });

  function createUser(name, age) {
    return {
      name: name,
      age: age,
      active: true,
    };
  }

  test('Check toEqual', () => {
    const user = createUser('John', 30);
  
    const expectedUser = {
      name: 'John',
      age: 30,
      active: true,
    };
  
    expect(user).toEqual(expectedUser);
  });

  function getFruits() {
    return ['apple', 'banana', 3];
  }

  test('Check that array contain string or number', () => {
    const fruits = getFruits();
    console.log("check 1");
    expect(fruits).toContain('banana');
    console.log("check 2");
    expect(fruits).toEqual(expect.arrayContaining([expect.any(String)])); 
    console.log("check 3");
    expect(fruits).toEqual(expect.arrayContaining([expect.any(Number)])); 
  });

  function divide(a, b) {
    return b === 0 ? (() => { throw new Error('Error: Divide for 0 is unreal'); })() : a / b;
  }

  test('Throw error by divide 0', () => {
    expect(() => divide(10, 0)).toThrow();
  
    expect(() => divide(10, 0)).toThrow('Error: Divide for 0 is unreal');
    });
