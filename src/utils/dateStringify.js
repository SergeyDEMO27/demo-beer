export default (dateItem) => {
  const date = new Date();
  date.setMonth(dateItem.split("/")[0] - 1);

  const dateName = date.toLocaleString("en-US", {
    month: "long",
  });

  return dateItem.split("/")[1]
    ? `${dateName} ${dateItem.split("/")[1]}`
    : dateItem;
};
