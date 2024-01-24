import { rest } from "msw";
const responseData = {
  cards: [
    {
      id: "17",
      name: "Alfred Pennyworth",
      image: "https://www.superherodb.com/pictures2/portraits/10/100/628.jpg",
      powerstats: {
        intelligence: "63",
        strength: "10",
        speed: "17",
        durability: "10",
        power: "7",
        combat: "55",
      },
    },
    {
      id: "416",
      name: "Luke Cage",
      image: "https://www.superherodb.com/pictures2/portraits/10/100/269.jpg",
      powerstats: {
        intelligence: "50",
        strength: "63",
        speed: "29",
        durability: "95",
        power: "44",
        combat: "70",
      },
    },
    {
      id: "703",
      name: "War Machine",
      image: "https://www.superherodb.com/pictures2/portraits/10/100/536.jpg",
      powerstats: {
        intelligence: "63",
        strength: "80",
        speed: "63",
        durability: "100",
        power: "100",
        combat: "85",
      },
    },
    {
      id: "703",
      name: "War Machine",
      image: "https://www.superherodb.com/pictures2/portraits/10/100/536.jpg",
      powerstats: {
        intelligence: "63",
        strength: "80",
        speed: "63",
        durability: "100",
        power: "100",
        combat: "85",
      },
    },
    {
      id: "707",
      name: "Warpath",
      image: "https://www.superherodb.com/pictures2/portraits/10/100/541.jpg",
      powerstats: {
        intelligence: "38",
        strength: "72",
        speed: "47",
        durability: "70",
        power: "26",
        combat: "84",
      },
    },
    {
      id: "203",
      name: "Darkman",
      image: "https://www.superherodb.com/pictures2/portraits/10/100/1126.jpg",
      powerstats: {
        intelligence: "75",
        strength: "14",
        speed: "23",
        durability: "85",
        power: "12",
        combat: "28",
      },
    },
    {
      id: "548",
      name: "Red Mist",
      image: "https://www.superherodb.com/pictures2/portraits/10/100/1337.jpg",
      powerstats: {
        intelligence: "25",
        strength: "10",
        speed: "23",
        durability: "14",
        power: "20",
        combat: "56",
      },
    },
    {
      id: "126",
      name: "Blue Beetle III",
      image: "https://www.superherodb.com/pictures2/portraits/10/100/1009.jpg",
      powerstats: {
        intelligence: "50",
        strength: "34",
        speed: "58",
        durability: "80",
        power: "100",
        combat: "30",
      },
    },
    {
      id: "121",
      name: "Bloodhawk",
      image: "https://www.superherodb.com/pictures2/portraits/10/100/1510.jpg",
      powerstats: {
        intelligence: "50",
        strength: "10",
        speed: "50",
        durability: "80",
        power: "80",
        combat: "64",
      },
    },
    {
      id: "422",
      name: "Machine Man",
      image: "https://www.superherodb.com/pictures2/portraits/10/100/90.jpg",
      powerstats: {
        intelligence: "63",
        strength: "32",
        speed: "35",
        durability: "84",
        power: "51",
        combat: "64",
      },
    },
    {
      id: "440",
      name: "Maya Herrera",
      image: "https://www.superherodb.com/pictures2/portraits/10/100/944.jpg",
      powerstats: {
        intelligence: "50",
        strength: "10",
        speed: "12",
        durability: "14",
        power: "60",
        combat: "14",
      },
    },
    {
      id: "186",
      name: "Copycat",
      image: "https://www.superherodb.com/pictures2/portraits/10/100/10423.jpg",
      powerstats: {
        intelligence: "56",
        strength: "10",
        speed: "21",
        durability: "25",
        power: "54",
        combat: "60",
      },
    },
    {
      id: "176",
      name: "Chuck Norris",
      image: "https://www.superherodb.com/pictures2/portraits/10/100/954.jpg",
      powerstats: {
        intelligence: "50",
        strength: "80",
        speed: "47",
        durability: "56",
        power: "42",
        combat: "99",
      },
    },
    {
      id: "80",
      name: "Beyonder",
      image: "https://www.superherodb.com/pictures2/portraits/10/100/1293.jpg",
      powerstats: {
        intelligence: "100",
        strength: "100",
        speed: "100",
        durability: "100",
        power: "100",
        combat: "84",
      },
    },
  ],
};

export const handlers = [
  rest.get("http://localhost:8080/api/cards", (req, res, ctx) => {
    console.log(req);
    return res(ctx.status(200), ctx.json(JSON.stringify(responseData)));
  }),
];
