export function getObjectKeys<T extends Record<string, unknown>>(data: T) {
  return Object.keys(data).filter(key => !['__typename', 'id'].includes(key))
}
