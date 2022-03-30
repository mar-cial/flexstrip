export interface Hardware {
  name:  string;
  price: number;
  image: string;
}

const hardware: Hardware[] = [
  {
    name: 'Universal Galvanized Steel',
    price: 5.99,
    image: '/hardwareimgs/universal.png',
  },
  {
    name: 'Flat Galvanized Steel',
    price: 4.99,
    image: '/hardwareimgs/flat.png',
  },
  {
    name: 'FTP Plastic Bullets',
    price: 2.99,
    image: '/hardwareimgs/htp.png',
  },
]

export default hardware
