const users = [
  {
    id: 2345,
    name: "Rey",
    company: "Livingly",
  },
  {
    id: 1342342,
    name: "Scott",
    company: "Livingly",
  },
  {
    id: 23324432,
    name: "Michael",
    company: "Livingly",
  },
  {
    id: 324324,
    name: "Jian",
    company: "CyberDVD",
  },
];
const unsortedUsers = [...users];
const sortedUsers = unsortedUsers.sort((a, b) => (a.name > b.name ? 1 : -1));
console.log(sortedUsers);
