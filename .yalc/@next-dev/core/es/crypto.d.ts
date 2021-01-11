export declare function base64(content: string | object): string;
export declare function debase64(content: string): string;
export declare function encrypt(content: string | object, key: string): string;
export declare function decrypt(cryptoBody: string, key: string): string;
export declare function encryptKey(key: string): string;
export declare function configRSAKey(key: string): void;
export declare function configBase64Map(map: string): void;
export declare function rsaEncrypt(input: string): string;
export declare function encryptSection(input: string): string;
export declare function encryptSectionWithEncode(content: string | object): string;
export declare function encryptBtoa(data: any[] | object | string): string;
export declare function decryptAtob(data: string): string;
