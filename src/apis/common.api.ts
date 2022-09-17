import { Slider } from "@src/models"
import axiosClient from "./AxiosConfig"

const commonApi = {
    getSliders: () => {
        return axiosClient.get<Array<Slider>>('/sliders')
    }
}
export default commonApi