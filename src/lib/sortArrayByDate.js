export default function sortArrayByDate(array) {
  let newArr = array.map((obj) => {
    return { ...obj, date: new Date(obj.release_date) };
  });
  const sortedDesc = newArr.sort(
    (obj1, obj2) => Number(obj2.date) - Number(obj1.date)
  );
  return sortedDesc;
}
