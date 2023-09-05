import Character from '../Character';

test('create user', () => {
  const res = new Character('Leo', 'Daemon', 10, 35);
  expect(res).toEqual({
    name: 'Leo',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 35,
  });
});

test('levelUp', () => {
  const res = new Character('Leo', 'Daemon', 10, 35);
  res.levelUp();
  expect(res).toEqual({
    name: 'Leo',
    type: 'Daemon',
    health: 100,
    level: 2,
    attack: 12,
    defence: 42,
  });
});

test('damage', () => {
  const res = new Character('Glen', 'Zombie', 40, 20);
  res.damage(15);
  expect(res).toEqual({
    name: 'Glen',
    type: 'Zombie',
    health: 88,
    level: 1,
    attack: 40,
    defence: 20,
  });
});

test('incorrect type', () => {
  const res = new Character('Mikl', 'Daem', 40, 25);
  expect(res).toThrow('Некорректный тип');
});

test('incorrect type name', () => {
  const res = new Character(1, 'Bowerman', 15, 40);
  expect(res).toThrow('Некорректное имя');
});

test('incorrect name', () => {
  const res = new Character('L', 'Daemon', 20, 20);
  expect(res).toThrow('Некорректное имя');
});

test('incorrect levelUp', () => {
  const res = new Character('Kleo', 'Magician', 10, 40);
  res.health = 0;
  res.levelUp();
  expect(res).toThrow('Нельзя повысить левел умершего :(');
});

test('damage null', () => {
  const res = new Character('Peli', 'Zombie', 20, 40);
  res.health = 0;
  res.damage(10);
  expect(res).toEqual({
    name: 'Peli',
    type: 'Zombie',
    health: 0,
    level: 1,
    attack: 20,
    defence: 40,
  });
});
