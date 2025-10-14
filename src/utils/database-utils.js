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
