const fakeData =[
    {
        id: 1,
        name: 'User 1'
    },
    {
        id: 2,
        name: 'User 2'
    },
];

module.exports = {
    get(){
        return fakeData.slice(0);
    }
};
