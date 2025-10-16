export const replaceMongoIdInArray = (array) => {
    const mappedArray = array.map(({ _id, ...item }) => {
        return {
            id: _id.toString(),
            ...item,
        };
    });

    return mappedArray;
};

export const replaceMongoIdInObject = (obj) => {
    const { _id, ...updatedObj } = { ...obj, id: obj._id.toString() };
    return updatedObj;
};

export const isDateInbetween = (date, from, to) => {
    return (
        new Date(date).getTime() >= new Date(from).getTime() &&
        new Date(date).getTime() <= new Date(to).getTime()
    );
};

export const getDayDifference = (from, to) => {
    return (
        (new Date(to).getTime() - new Date(from).getTime()) /
            (24 * 60 * 60 * 1000) +
        1
    );
};
