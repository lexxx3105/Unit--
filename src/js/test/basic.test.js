import defineHealthStatus from '../basic';

test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Лучник', health: 40 }, 'wounded'],
  [{ name: 'Воин', health: 5 }, 'critical'],
])(
  'определить состояние здоровья для %o как %s',
  (player, expected) => {
    const result = defineHealthStatus(player);
    expect(result).toBe(expected);
  },
);