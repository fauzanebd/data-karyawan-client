class Api {

    constructor(authToken) {
        this.authToken = authToken;
    }

    ApiURL = "https://salty-earth-69832.herokuapp.com/https://data-karyawan-api.herokuapp.com/api/employees";

    headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    // BASE_URL = '/api/employees';

    createHeaders() {
        return this.authToken ? {
            ...this.headers,
            'Authorization': 'Bearer ' + this.authToken
        } : this.headers;
    }

    async getAll() {
        return await fetch(this.ApiURL, {
            method: 'GET',
            headers: this.createHeaders()
        });
    }

    async getById(id) {
        return await fetch(`${this.ApiURL}/${id}`, {
            method: 'GET',
            headers: this.createHeaders()
        });
    }

    async delete(id) {
        return await fetch(`${this.ApiURL}/${id}`, {
            method: 'DELETE',
            headers: this.createHeaders()
        });
    }

    async update(item) {
        return await fetch(`${this.ApiURL}/${item.id}`, {
            method:'PUT',
            headers: this.createHeaders(),
            body: JSON.stringify(item),
        });
    }

    async create(item) {
        return await fetch(this.ApiURL, {
            method:'POST',
            headers: this.createHeaders(),
            body: JSON.stringify(item),
        });
    }
}

export default Api;