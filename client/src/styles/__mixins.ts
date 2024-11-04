export const flexMixin = (direction: string, justify: string, align: string) => `
    display : flex;
    flex-direction : ${direction};
    justify-content : ${justify};
    align-items : ${align};
`;

export const flexColumn = (justify: string, align: string) => `
    ${flexMixin("column", justify, align)}
`;

export const flexRow = (justify: string, align: string) => `
    ${flexMixin("row", justify, align)}
`;

export const flexCenter = () => `
    ${flexMixin("row", "center", "center")}
`;

export const flexColumnCenter = () => `
    ${flexMixin("column", "center", "center")}
`;

export const flexRowCenter = () => `
    ${flexMixin("row", "center", "center")}
`;

export const flexColumnBetween = () => `
    ${flexMixin("column", "space-between", "center")}
`;

export const flexRowBetween = () => `
    ${flexMixin("row", "space-between", "center")}
`;
