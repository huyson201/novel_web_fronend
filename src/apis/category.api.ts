import { Category } from "@src/models/category"
import defaultAxios from "./AxiosConfig"

const categoryApi = {
    getAll: () => {
        return defaultAxios.get<Array<Category>>('/categories')
    }
}

export default categoryApi