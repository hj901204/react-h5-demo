import { RequestTuple } from "@/type/request";

const ApiCollector: {
    [propName: string]: RequestTuple;
} = {

    getHome: {
        method: 'get',
        url: '/api/getCsvList'
    },

    getSelectCsv: {
        method: 'post',
        url: '/api/getSelectCsv'
    },

};

export default ApiCollector;