import { join } from "path";

const fs = require("fs/promises");
const fss = require("fs");

export class FileSystem {

    static async readCSV<T = any> (path: string, separator: string = ",") {
        const data = await this.read(path);
        const lines = data.toString().split("\n");
        const rows: T[] = [];
        const headers = lines[0].trim().split(separator);

        for (let i=1;i<lines.length;i++) {
            const obj: T | any = {};
            const columns = lines[i].trim().split(separator);

            for (let j=0;j<columns.length;j++) {
                obj[headers[j]] = columns[j];
            }

            rows.push(obj);
        }

        return rows;
    }

    static async read (path: string): Promise<String> {
        return await fs.readFile(path, 'utf-8');
    }

    static async write (path: string, data: string | Buffer) {
        await fs.writeFile(path, data);
    }

    static async remove (path: string) {
        await fs.unlink(path);
    }

    static readSync (path: string) {
        return fss.readFileSync(path, 'utf-8');
    }

    static writeSync (path: string, data: string) {
        fss.writeFileSync(path, data);
    }

    static async lookup (dirs: string[], name: string): Promise<String | null> {
        const filesFound = await Promise.all(dirs.map(async (dir) => {
            try {
                const data = await FileSystem.read(join(dir, name));

                return data;
            } catch (exc: any) {
                if (exc.code !== "ENOENT") throw exc;

                return null;
            }
        }));
        
        return filesFound.find(f => !!f) || null;
    }
}