export function getObjectKeys<T>(data: T) {
  if (!Array.isArray(data) || data?.length === 0) {
    return []
  }

  return Object.keys(data?.[0]).filter(key => !['__typename', 'id'].includes(key))
}
