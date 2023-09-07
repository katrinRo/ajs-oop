import Character from '../Character';

test('create user', () => {
  const res = new Character('Leo', 'Daemon');
  res.attack = 10;
  res.defence = 35;
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
  const res = new Character('Leo', 'Daemon');
  res.attack = 10;
  res.defence = 35;
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
  const res = new Character('Glen', 'Zombie');
  res.attack = 40;
  res.defence = 20;
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
  expect(() => {
    const res = new Character('Mikl', 'Daem');
    res.attack = 40;
    res.defence = 25;
  }).toThrow('Некорректный тип');
});

test('incorrect type name', () => {
  expect(() => {
    const res = new Character(1, 'Bowerman');
    res.attack = 15;
    res.defence = 40;
  }).toThrow('Некорректное имя');
});

test('incorrect name', () => {
  expect(() => {
    const res = new Character('L', 'Daemon');
    res.attack = 20;
    res.defence = 20;
  }).toThrow('Некорректное имя');
});

test('incorrect levelUp', () => {
  expect(() => {
    const res = new Character('Kleo', 'Magician');
    res.attack = 10;
    res.defence = 40;
    res.health = 0;
    res.levelUp();
  }).toThrow('Нельзя повысить левел умершего :(');
});

test('damage null', () => {
  const res = new Character('Peli', 'Zombie');
  res.attack = 20;
  res.defence = 40;
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
