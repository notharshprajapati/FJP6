let spooderman = {
    name: 'Peter',
    age: '19',
    friends: ['mj', 'ned'],
    address: {
        city: 'queens',
        state: 'ny'
    },
    sayhi: function () {
        console.log('Cap is saying hello')
    }
};

//2 ways to access elements 

console.log(spooderman.name);
console.log(spooderman['name']);