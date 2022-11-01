const convertArticleName = (title: string) => {
  if (!title) return title;
  return title.replace(/ /gi, '-');
};

const revertArticleName = (title: string) => {
  if (!title) return title;
  return title.replace(/-/gi, ' ');
};

export { convertArticleName, revertArticleName };
