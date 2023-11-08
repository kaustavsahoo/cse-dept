const convertObjectIdsToStrings = (obj) => {
    return JSON.parse(JSON.stringify(obj));
};

export { convertObjectIdsToStrings};