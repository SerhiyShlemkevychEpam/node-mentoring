const fakeData = [
    {
        id: '1',
        name: 'Product 1',
        reviews: [
            'review 1',
            'review 2',
        ]
    },
    {
        id: '2',
        name: 'Product 2',
        reviews: [
            'review 1',
            'review 2',
        ]
    },
]

module.exports = {
    get() {
        return fakeData.slice(0);
    },
    getById(id) {
        return fakeData.find(p => p.id === id);
    },
    getReviewsById(id) {
        const product = this.getById(id);
        return product && product.reviews.slice(0);
    }
};
