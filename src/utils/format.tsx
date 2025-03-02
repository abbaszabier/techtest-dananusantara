export const formatDate = (date: string) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("id-ID", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};
