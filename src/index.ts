const defaultWorld = 'world';

export function hello(world: string = defaultWorld): string {
  return `Hello, ${world}! `;
}
