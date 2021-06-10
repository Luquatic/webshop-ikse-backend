export const users = {
    1: {
        firstname: 'Jessey',
        lastname: 'Fransen',
        username: 'jesseyfransen',
        password: 'test123',
        isAdmin: true
    }
}

export const products = {
    1: {
        brand: 'DAILY AESTHETIKZ',
        description: 'Raven Hoodie',
        price: 49.95,
        imagePath: 'https://cdn.thesting.com/is/image/thesting/342714-taupedark_psfront1?wid=980&qlt=80&resMode=sharp'
    }
}

export function findAllUsers() {
    return <any[]> Object.values(users);
}

export function findAllProducts() {
    return <any[]> Object.values(products);
}
