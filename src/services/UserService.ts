import $api from "../http";
import {AxiosResponse} from 'axios';
import { AuthResponce } from "../models/response/AuthResponse";
import { IUser } from "../models/IUser";
import { itilUser } from "../models/itil/itilUser";
import { itilCompany } from "../models/itil/itilCompany";
import { commentModel } from "../models/itil/itilCommentModel";
import { OneTaskInterface } from "../models/itil/itilOneTaskInterface";
import { itilEmail } from "../models/itil/itilAllEmailModels";
import { itilDatalore } from "../models/itil/itilDataloreModels";

export default class UserService {
    static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>('/users')
    }

    static async getItilUser(): Promise<AxiosResponse<itilUser[]>>{
        return $api.get<itilUser[]>('/itiluser')
    }

    static async getCompanyItil(): Promise<AxiosResponse<itilCompany[]>>{
        return $api.get<itilCompany[]>(`/onecompany/${localStorage.getItem('UserUID')}`)
    }

    static async getComment(taskUid:String, taskType:String): Promise<AxiosResponse<commentModel[]>> {
        return $api.get<commentModel[]>(`/getcomment/${taskUid}/${taskType}`)
    }

    static async getOneTask(taskUid:String, taskType:String): Promise<AxiosResponse<OneTaskInterface[]>> {
        return $api.get<OneTaskInterface[]>(`/getonetask/${taskUid}/${taskType}`)
    }

    static async getAllTask(email:string): Promise<AxiosResponse<OneTaskInterface[]>> {
        return $api.get<OneTaskInterface[]>(`/getalltask/${email}`)
    }

    static async getAllEmail(email:string): Promise<AxiosResponse<itilEmail[]>> {
        return $api.get<itilEmail[]>(`/getallemail/${email}`)
    }

    static async getAA6Users(email:string): Promise<AxiosResponse<itilEmail[]>> {
        return $api.get<itilEmail[]>(`/getaa6/${email}`)
    }

    static async getDataloreItil(): Promise<AxiosResponse<itilDatalore []>> {
        return $api.get<itilDatalore[]>(`datalore`)
    }
}