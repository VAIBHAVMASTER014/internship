import fs from "fs";

export const readFromJson = (file: string) => {
    const data = fs.readFileSync(file, "utf8");
    return JSON.parse(data);
};
