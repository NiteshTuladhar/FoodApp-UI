const popularData = [
    {
        id: '1',
        images: require('../images/pizza1.png'),
        title : 'Primevera Pizza',
        weight : '540 gms',
        rating : '5.0',
        price: 3.99,
        sizeName: 'Small',
        sizeNumber: 12,
        crust: 'Thin Crust',
        deliveryTime: 30,
        ingredients:[
            {
                id: '1',
                name: 'ham',
                image: require('../images/ham.png')
            },
            {
                id: '2',
                name: 'tomato',
                image: require('../images/tomato.png')
            },
            {
                id: '3',
                name: 'cheese',
                image: require('../images/cheese.png')
            },
            {
                id: '4',
                name: 'garlic',
                image: require('../images/garlic.png')
            }
        ]

    },

    {
        id: '2',
        images: require('../images/pizza2.png'),
        title : 'Vegeterian Pizza',
        weight : '500 gms',
        rating : '4.0',
        price: 9.99,
        sizeName: 'Medium',
        sizeNumber: 14,
        crust: 'Thin Crust',
        deliveryTime: 20,
        ingredients:[
            {
                id: '1',
                name: 'tomato',
                image: require('../images/tomato.png')
            },
            {
                id: '2',
                name: 'cheese',
                image: require('../images/cheese.png')
            },
        ]
    },

    {
        id: '3',
        images: require('../images/pizza3.png'),
        title : 'Pepporoni Pizza',
        weight : '1200 gms',
        rating : '5.0',
        price: 12.99,
        sizeName: 'Large',
        sizeNumber: 14,
        crust: 'Thin Crust',
        deliveryTime: 30,
        ingredients:[
            {
                id: '1',
                name: 'ham',
                image: require('../images/ham.png')
            },
            {
                id: '2',
                name: 'tomato',
                image: require('../images/tomato.png')
            },
            {
                id: '3',
                name: 'cheese',
                image: require('../images/cheese.png')
            },
            {
                id: '4',
                name: 'garlic',
                image: require('../images/garlic.png')
            }
        ]
    },
]

export default popularData;