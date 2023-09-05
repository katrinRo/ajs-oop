import Bowerman from "../Bowerman";

test('creat Bowerman', () => {
  const res = new Bowerman("Bowerman");

  expect(res).toEqual({
    name: 'Bowerman',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  })
})
