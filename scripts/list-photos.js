import { readdirSync, writeFileSync } from "fs";
import { join, extname } from "path";

const dir = "./public/photo/camargue/plage";
const output = "./photos.json";

const extensions = [".jpg", ".jpeg", ".png", ".gif"];

const files = readdirSync(dir).filter(file =>
    extensions.includes(extname(file).toLowerCase())
).map(file => join(dir, file));

writeFileSync(output, JSON.stringify(files, null, 2), "utf-8");

console.log(`✅ ${files.length} photos listées dans ${output}`);