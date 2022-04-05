const format = (date: number) => date < 10 ? `0${date}` : date.toString();

const getDateString = (timestamp: number):string => {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${year}${format(month)}${format(day)}${hours}${minutes}${seconds}`;
};

export default getDateString