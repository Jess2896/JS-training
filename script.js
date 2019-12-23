class Park {
    constructor(name, area, numberOfTrees, age) {
        this.name = name,
        this.area = area,
        this.numberOfTrees = numberOfTrees,
        this.age = age
    }
    getTreeDensity(park) {
        return park.numberOfTrees / park.area;
    }
}

class Street {
    constructor(name, length, yearBuilt, size) {
        this.name = name,
        this.length = length,
        this.yearBuilt = yearBuilt,
        this.size = size,
        this.sizeClassification = this.sizeClassification();
    }
    
    sizeClassification() {
        const streetSize = this.size;
        if (!streetSize) {
            return 'normal';
        }
        if (streetSize > 20) {
            return 'huge';
        }
        if (streetSize > 10 ) {
            return 'big'
        }
        return 'small';
    }
}

class Town {
    constructor(name, parks, streets) {
        this.name = name,
        this.parks = parks,
        this.streets = streets
    }
    getAverageAges() {
        let avrg = 0;
        this.parks.forEach(park => {
            avrg += park.age;
        });
        return avrg;
    }

    getParkWith1000Trees() {
        const park = this.parks.find(({numberOfTrees}) => numberOfTrees >= 1000);
        return park.name;
    }

    getTotalLenghtOfStreets() {
        let total = 0;
        this.streets.forEach(street => {
            total += street.length;
        });
        return total;
    }
    getAvergLenghtOfStreets() {
        return this.getTotalLenghtOfStreets() / this.streets.length;
    }
}

{
    const park1 = new Park('Green Park', 156, 50, 500);
    const park2 = new Park('National Park', 156, 50, 200);
    const park3 = new Park('Naional Park', 156, 1000, 1100);

    const allParks = [park1, park2, park3];

    const street1 = new Street('Ocean Avenue', 20, 1999, 11);
    const street2 = new Street('Evergreen Street', 20, 2008, 10);
    const street3 = new Street('4th Street', 20, 2015);
    const street4 = new Street('Sunset Boulevard', 20, 1982, 21);

    const allStreets = [street1, street2, street3, street4];

    const town = new Town('The Town', allParks, allStreets);

    console.log('-----------------------PARKS REPORT-------------------------------------');
    console.log(`Our ${town.parks.length} parks have an average age of ${town.getAverageAges()} years.`)
    town.parks.forEach(park => {
        console.log(`${park.name} has a tree density of ${park.getTreeDensity(park)} trees per square km.`);
    });
    console.log(`${town.getParkWith1000Trees()} has more than 1000 trees.`)
    console.log('----------------------STREETS REPORT------------------------------------');
    console.log(`Our ${town.streets.length} streets have a total lenght of ${town.getTotalLenghtOfStreets()} km, with an average of ${town.getAvergLenghtOfStreets()} km.`);
    town.streets.forEach(street => {
        console.log(`${street.name}, built in ${street.yearBuilt}, is a ${street.sizeClassification} street`);
    });
}
