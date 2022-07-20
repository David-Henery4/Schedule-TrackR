
const formatDate = (date) => {
    const formated = date.toLocaleDateString("default", {
        month: "long",
        weekday: "long",
        year: "numeric",
        day: "numeric",
    });
    const formatedDate = {
        day: formated.split(" ").slice(0, 1).toString().slice(0, -1),
        date: formated.split(" ").slice(1, 2).toString(),
        month: formated.split(" ").slice(2, 3).toString(),
        year: formated.split(" ").slice(3, 4).toString(),
    };
    return formatedDate
}

export default formatDate