import Undead from '../Undead';

test('creat Undead', () => {
  const res = new Undead('Undead');

  expect(res).toEqual({
    name: 'Undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
