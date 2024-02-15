export const formatDate = (
  date,
  options = {
    month: "short",
    day: "numeric",
  }
) => {
  const parsedDate = new Date(date);

  let time = Date.now() - parsedDate.getTime();
  if (time < 86400000) return "Today";
  if (time > 86400000 && time < 172800000) return "Yesterday";
  if (time > 172800000 && time < 259200000) return "2 days ago";
  return parsedDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
};
