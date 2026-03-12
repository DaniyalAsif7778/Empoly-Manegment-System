import nacl from "tweetnacl";
import naclUtil from "tweetnacl-util";

class CryptoService {
  constructor(secretKey) {
    // convert key string to Uint8Array
    const keyBytes = naclUtil.decodeUTF8(secretKey);

    // ensure key length is 32 bytes
    this.key = new Uint8Array(32);
    this.key.set(keyBytes.slice(0, 32));
  }

  encrypt(text) {
    const message = naclUtil.decodeUTF8(text);

    const nonce = nacl.randomBytes(24);

    const encrypted = nacl.secretbox(message, nonce, this.key);

    return {
      encrypted: naclUtil.encodeBase64(encrypted),
      nonce: naclUtil.encodeBase64(nonce)
    };
  }

  decrypt(encryptedData, nonce) {
    const encryptedBytes = naclUtil.decodeBase64(encryptedData);
    const nonceBytes = naclUtil.decodeBase64(nonce);

    const decrypted = nacl.secretbox.open(
      encryptedBytes,
      nonceBytes,
      this.key
    );

    if (!decrypted) {
      throw new Error("Decryption failed");
    }

    return naclUtil.encodeUTF8(decrypted);
  }
}

export default CryptoService;