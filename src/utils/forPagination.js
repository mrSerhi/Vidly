export const createPagination = (items, currPage, itemsPerPage) => {
  const initStart = (currPage - 1) * itemsPerPage;
  const cutItems = [...items];
  const sliceItems = cutItems.slice(initStart);
  return sliceItems.slice(0, itemsPerPage);
};
