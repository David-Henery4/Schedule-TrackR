
export const getDatesObj = (n,tempYear,tempMonth) => {
    const currentAmountOfDays = [];
    const daysAndDates = []
    for (let i = 0; i < n; i++) {
        currentAmountOfDays.push(i + 1);
    }
    currentAmountOfDays.forEach((d, i, a) => {
        const dates = new Date(tempYear, tempMonth - 1, d);
        const dayNames = dates.toLocaleDateString("default", {
        weekday: "short", 
        });
        const createdObj = {
        day: d,
        name: dayNames,
        fullDates: dates,
        };
        daysAndDates.push(createdObj)
    });
    return daysAndDates
}

