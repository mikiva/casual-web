import http from "./http";

class UpdateServiceImpl {
  async scaleAlias(alias, count) {
    const result = await http.post("/casua/.casual/domain/scale/aliases", {
      aliases: [
        {
          name: alias,
          instances: count,
        }
      ]
    })
  }
}

export const UpdateService = new UpdateServiceImpl()

