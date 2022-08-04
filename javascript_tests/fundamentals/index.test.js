import {
  getSmallestNumberWithBuiltInObject,
  getSmallestNumberWithoutBuiltIn,
  calculateAverageToHundredthsDecimal,
  sortUsersByName,
  getUserByName,
  getUsersByCompany,
  mergeUsersES5,
  mergeUsersES6,
  mergeUserDataES5,
  mergeUserDataES6,
  createPromiseFromApiUrlWithThen,
  createPromiseFromApiUrlWithAsync,
} from "./index";

describe("Test for an array of numbers", () => {
  const numbers = [2, 5, 22, 15, 11, 99];

  test("Get the smallest number with a built in Object", () => {
    expect(getSmallestNumberWithBuiltInObject(numbers)).toBe(2);
  });

  test("Get the smallest number without a built in Object", () => {
    expect(getSmallestNumberWithoutBuiltIn(numbers)).toBe(2);
  });

  test("Get the average of an array of integers", () => {
    const answer = (
      numbers.reduce((prev, curr) => prev + curr) / numbers.length
    ).toFixed(2);
    expect(calculateAverageToHundredthsDecimal(numbers)).toBe(answer);
  });
});

describe("Test for an array of objects", () => {
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

  test("Sort the users by name", () => {
    const testUsers = [...users];
    const mockUsers = [...users];
    const mockSortedUsers = mockUsers.sort((a, b) =>
      a.name > b.name ? 1 : -1
    );

    expect(sortUsersByName(testUsers).toBe(mockSortedUsers));
  });

  test("Get user by name", () => {
    const employees = [...users];
    const name = "Jian";
    const nameFound = employees.find((employee) => employee.name === name);

    expect(getUserByName(employees, name).toBe(nameFound));
  });

  test("Get users by company", () => {
    const testUsers = [...users];
    const testCompany = "Livingly";
    const usersCopy = [...users];
    const usersByCompany = usersCopy.filter(
      (user) => user.company === testCompany
    );

    expect(getUsersByCompany(testUsers, testCompany)).toBe(usersByCompany);
  });
});

describe("es5 and es6 merging of arrays", () => {
  const livinglyUsers = [
    {
      id: 2345,
      firstName: "Rey",
      company: "Livingly",
    },
    {
      id: 1342342,
      firstName: "Scott",
      company: "Livingly",
    },
    {
      id: 23324432,
      firstName: "Michael",
      company: "Livingly",
    },
  ];

  const cyberDvdUsers = [
    {
      id: 324324,
      firstName: "Jian",
      company: "CyberDVD",
    },
  ];

  test("Merge two arrays using ES5 syntax", () => {
    const mockUsersMerged = livinglyUsers.concat(cyberDvdUsers);
    expect(mergeUsersES5(livinglyUsers, cyberDvdUsers).toBe(mockUsersMerged));
  });

  test("Merge two arrays using ES6 syntax", () => {
    const mockUsersMerged = [...livinglyUsers, ...cyberDvdUsers];
    expect(mergeUsersES6(livinglyUsers, cyberDvdUsers).toBe(mockUsersMerged));
  });
});

describe("es5 and es6 merging of objects", () => {
  const userData1 = {
    id: 2345,
    firstName: "Rey",
    company: "Livingly",
  };

  const userData2 = {
    id: 2345,
    lastName: "Arqueza",
    company: "Livingly",
  };

  test("Merge two objects with ES5 syntax", () => {
    const mockUserMerged = Object.assign(usersData1, userData2);
    expect(mergeUserDataES5(userData1, userData2).toBe(mockUserMerged));
  });

  test("Merge two objects with ES6 syntax", () => {
    const mockUserMerged = { ...userData1, ...userData2 };
    expect(mergeUserDataES6(userData1, userData2).toBe(mockUserMerged));
  });
});

describe("Async test group", () => {
  /* test url returns the following json: */
  const dataJson = {
    posts: [
      {
        id: 1,
        title: "Post 1",
      },
      {
        id: 2,
        title: "Post 2",
      },
      {
        id: 3,
        title: "Post 3",
      },
    ],
    comments: [
      {
        id: 1,
        body: "some comment",
        postId: 1,
      },
      {
        id: 2,
        body: "some comment",
        postId: 1,
      },
    ],
    profile: {
      name: "typicode",
    },
  };
  const dataApi = "https://my-json-server.typicode.com/typicode/demo/db";

  test("test that promise =with then= returns correct data", () => {
    createPromiseFromApiUrlWithThen.then((data) => {
      expect(data).toBe(dataJson);
    });
  });

  test("test that promise =with then= returns correct data", () => {
    createPromiseFromApiUrlWithThen.then((data) => {
      expect(data).toBe(dataJson);
    });
  });

  test("test that promise with async returns correct data", async () => {
    const data = await createPromiseFromApiUrlWithAsync(dataApi);
    expect(data).toBe(dataJson);
  });
});
