export const deviceUsed = (width) => {
  if (width >= 1100) return "desktop";
  if (width >= 600 && width < 1099) return "tablet";
  if (width < 599) return "phone";
}