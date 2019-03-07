export const reduceFunctionGarbage = func =>
    func
        .split("\n")
        .filter(line => !line.includes("REMOVE::"))
        .join("\n");
