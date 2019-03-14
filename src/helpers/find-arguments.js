export const findArguments = numChallenge =>
    require(`!raw-loader!../../challenges/${numChallenge}.js`)
        .split("\n")
        .filter(line => line.includes("REMOVE::arguments:"))
        .join("\n")
        .replace("// REMOVE::arguments:", "")
        .split(",");
