import { InMemoryDbService } from 'angular-in-memory-web-api'

export class InMemProductService implements InMemoryDbService {
     createDb() {

    let products = [
      
    { "id": 1,
        "productName": "Coca cola",
        "productCode": "001",
        "releaseDate": "March 19, 2016",
        "description": "Coca Cola",
        "price": 19.95,
        "starRating": 3.2,
        'tags': ['drink', 'cola'] } 
           
    ];

    let users = [
      { "id": 1,
        "username": "admin",
        "isActive": true,
        "created": "March 19, 2016"
      }
    ];

    let events = [
    {
      id: 1,
      name: 'Angular Connect',
      date: new Date('9/26/2036'),
      time: '10:00 am',
      price: 599.99,
      location: {
        address: '1057 DT',
        city: 'London',
        country: 'England'
      },
      sessions: [
        {
          id: 1,
          name: "Working with Angular",
          presenter: "Joe Doe",
          duration: 1,
          level: "Intermediate",
          abstract: ``,
          voters: ['user1', 'user2']
        }
      ]
    }
    ];

    return {products, users, events};

  }
  
}