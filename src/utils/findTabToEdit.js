
const findActiveEditTab = (id, currentData, inputFormOpen) => {
  const updatedData = currentData.map((t) => {
    if (id === t.id) {
      t.editActive = true;
      inputFormOpen();
    } else {
      t.editActive = false;
    }
    return t;
  });
  return updatedData;
};

export default findActiveEditTab