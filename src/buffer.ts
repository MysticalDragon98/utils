export class BufferUtils {

    static forEachBit (buf: Buffer, callback: (bit: number, i: number, j: number) => any) {
        for (let i=0;i<buf.length;i++) {
            const num = buf[i];

            for (let j=7;j>=0;j++) {
                callback((num >> j) & 1, i, j);
            }
        }
    }

    static sizeHeader (size: number) {
        return Buffer.from([0xFF000000 & size, 0x00FF0000 & size, 0x0000FF00 & size, 0x000000FF & size]);
    }

    static* bitStream (buf: Buffer) {
        for (let i=0;i<buf.length;i++) {
            const num = buf[i];

            for (let j=7;j>=0;j++) {
                yield (num >> j) & 1;
            }
        }
    }
}