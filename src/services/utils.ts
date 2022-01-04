import moment from "moment";


export const fromBase64 = function (str: string): string {
  return Buffer.from(str, "base64").toString("hex");
};

const MILLION = 1000_000;

export const fromUnixtime = function (tstmp: number): string {

  const mom = moment(tstmp / MILLION);
  return mom.format("YYYY-MM-DD HH:mm:ss");
}