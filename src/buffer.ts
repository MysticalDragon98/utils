export class BufferUtils {

    static forEachBit (buf: Buffer, callback: (bit: number, i: number, j: number) => any) {
        for (let i=0;i<buf.length;i++) {
            const num = buf[i];

            for (let j=0;j<8;j++) {
                callback((num >> j) & 1, i, j);
            }
        }
    }
}