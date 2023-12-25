export function truncateWords(str, count) {
  if (!str) return str

  return str.split(" ").slice(0, count).join(" ") + "..."
}

export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
