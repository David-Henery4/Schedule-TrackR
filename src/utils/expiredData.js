
const removeExpiredData = (arrayData) => {
    if (arrayData.length > 0) {
      const currentDate = new Date(
        `${
          new Date().getMonth() + 1
        } ${new Date().getDate()},${new Date().getFullYear()}`
      );
      const newArrayData = arrayData.filter((item) => {
        const numberBetween =
          Math.round(+currentDate - item.dateStamp) / (1000 * 60 * 60 * 24);
        if (numberBetween <= 7) {
          return item;
        }
      });
      return newArrayData;
    } else {
      return arrayData
    }
}

export default removeExpiredData