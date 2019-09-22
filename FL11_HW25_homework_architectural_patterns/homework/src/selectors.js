export const selectData = (state) => state.data;
const selectShowed = (state) => state.showed;

export const selectShowedData = (state) => {
    const data = selectData(state);
    const showed = selectShowed(state);

    return data.slice(0, showed);
};

export const selectFilteredDisplayed = (state) => {
    const data = selectShowedData(state);
    const filtered = data.filter((i) => i.name.includes(state.search));

    return filtered;
};

export const selectFilteredData = (state) => {
    const data = selectData(state);
    const filtered = data.filter((i) => i.name.includes(state.search));

    return filtered;
};
