export function getObjectKeys<T extends Record<string, unknown>>(data: T) {
  if (!data || typeof data !== 'object') {
    return []
  }

  return Object.keys(data).filter(key => !['__typename', 'id'].includes(key))
}
