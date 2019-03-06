export const reduceFunctionGarbage = e =>
    e
        .split("\n")
        .filter(l => !l.includes("arguments"))
        .join("\n");
