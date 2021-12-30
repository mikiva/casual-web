import http from "./http";

class InformationServiceImpl {

    async getDomain() {
        const result = await http.post("/casual/.casual/domain/state", {});
        return result.data?.result;
        
        
    }
    async getServices() {
        const result = await http.post("/casual/.casual/service/state", {});
        return result.data?.result;
        //
    }



}


export const InformationService =  new InformationServiceImpl();