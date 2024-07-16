import axios from 'axios'

export default class CategoryService {
    async getCategories() {
        const response = await axios.get('/categories/')
        return response.data.results
    }

    async createCategory() {
        const response = await axios.get('/categories/' category)
        return response.data
    }
}