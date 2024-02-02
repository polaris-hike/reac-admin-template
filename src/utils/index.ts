export const transformData = (data: any) => {
  const res: any = [];
  if (!data) return res;
  data.forEach((item: any) => {
    const newObj = {
      title: item.name,
      key: item.id,
      value: item.id,
      children: transformData(item.children),
    };
    res.push(newObj);
  });
  return res;
};
