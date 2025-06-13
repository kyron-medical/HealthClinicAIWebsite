import crypto from "crypto";

const algorithm = "aes-256-gcm";
const key = process.env.PHI_ENCRYPTION_KEY!; // 32 bytes (256 bits), securely stored
const ivLength = 12; // GCM recommended IV length

function hexToUint8Array(hex: string): Uint8Array {
  return new Uint8Array(
    hex.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16)),
  );
}

export function encrypt(text: string): {
  data: string;
  iv: string;
  tag: string;
} {
  const ivBuffer = crypto.randomBytes(ivLength); // Buffer
  const iv = new Uint8Array(
    ivBuffer.buffer,
    ivBuffer.byteOffset,
    ivBuffer.byteLength,
  ); // Uint8Array

  const cipher = crypto.createCipheriv(algorithm, hexToUint8Array(key), iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  const tag = cipher.getAuthTag();
  return {
    data: encrypted,
    iv: Buffer.from(iv).toString("hex"), // Store as hex string
    tag: tag.toString("hex"),
  };
}

export function decrypt({
  data,
  iv,
  tag,
}: {
  data: string;
  iv: string;
  tag: string;
}): string {
  const decipher = crypto.createDecipheriv(
    algorithm,
    hexToUint8Array(key),
    hexToUint8Array(iv) // Convert hex string back to Uint8Array
  );
  decipher.setAuthTag(hexToUint8Array(tag));
  let decrypted = decipher.update(data, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}