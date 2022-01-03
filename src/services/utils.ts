export const fromBase64 = function (str: string): string {
  return Buffer.from(str, "base64").toString("hex");
};
