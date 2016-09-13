export interface CardBrand {
    name: string;
    image: string;
}

const carBrands = [
    {
        name: 'Acura',
        image: require('./img/acura.png')
    }, {
        name: 'Audi',
        image: require('./img/audi.png')
    }, {
        name: 'Buick',
        image: require('./img/buick.png')
    }, {
        name: 'Cadillac',
        image: require('./img/cadillac.png')
    }, {
        name: 'Chevrolet',
        image: require('./img/chevrolet.png')
    }, {
        name: 'Chrysler',
        image: require('./img/chrysler.png')
    }, {
        name: 'Dodge',
        image: require('./img/dodge.png')
    },{
        name: 'Ford',
        image: require('./img/ford.png')
    },{
        name: 'Honda',
        image: require('./img/honda.png')
    }, {
        name: 'Hummer',
        image: require('./img/hummer.png')
    }, {
        name: 'Hyundai',
        image: require('./img/hyundai.png')
    }, {
        name: 'Infiniti',
        image: require('./img/infiniti.png')
    },{
        name: 'Jaguar',
        image: require('./img/jaguar.png')
    },{
        name: 'BMW',
        image: require('./img/bmw.png')
    },{
        name: 'Jeep',
        image: require('./img/jeep.png')
    }, {
        name: 'KIA',
        image: require('./img/kia.png')
    }, {
        name: 'Lexus',
        image: require('./img/lexus.png')
    }, {
        name: 'Mazda',
        image: require('./img/mazda.png')
    },{
        name: 'Mercedes-Benz',
        image: require('./img/mercedes-benz.png')
    },{
        name: 'MINI',
        image: require('./img/mini.png')
    },{
        name: 'Mitsubishi',
        image: require('./img/mitsubishi.png')
    }, {
        name: 'Nissan',
        image: require('./img/nissan.png')
    },{
        name: 'Saab',
        image: require('./img/saab.png')
    },{
        name: 'Subaru',
        image: require('./img/subaru.png')
    },{
        name: 'Suzuki',
        image: require('./img/suzuki.png')
    },{
        name: 'Toyota',
        image: require('./img/toyota.png')
    },{
        name: 'Volkswagen',
        image: require('./img/volkswagen.png')
    },{
        name: 'Volvo',
        image: require('./img/volvo.png')
    }
];

export const findCarBrand = (carBrandName: string): CardBrand => {
    return carBrands.filter((carBrand) => carBrand.name.toLowerCase() === carBrandName.toLowerCase())[0];
};

export { carBrands };
