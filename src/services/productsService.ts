import http from "./httpService";

export function getProducts() {
    return http.get('/products').then(({ data }) => data);
}

export function deleteProduct(id: number) {
    return http.delete(`/products/${id}`).then(({ data }) => data);
}

export function updateProduct(id: number, title: string, price: number) {
    return http.put(`/products/${id}`, { title, price }).then(({ data }) => data);
}