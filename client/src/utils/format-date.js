export function formatDate(dateNumber: number) {
  const date = new Date(dateNumber);

  const y = date.getFullYear();
  const m = date.getMonth();
  const d = date.getDate();

  return `${y}-${m}-${d}`;
}
