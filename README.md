My take on a challenge from Developer Launchpad meetup:

http://developerlaunchpad.com/2017/08/26/Church-Directory/

# Church Directory
You have been asked by a local church for help maintaining their directory and to build functions that will automate tasks for the church staff.

##Challenge

For this challenge we will be dealing with building complex objects and manipulating them. This may involve reading and writing to a file and creating a user interface for entering data. Since the challenge is not about designing good UI your interface may be console based or a simple HTML page, but it will need to have all the functionality required for the level of challenge you choose.

Similar to last month you will be presented with what the end user wants to be able to do but the actual design and architecture is up to you to create.

##Creating a Test Case

We’ll continue to use test driven development. No matter the level you choose write a test case before you start coding. Then write enough code to pass the test. Once you have a passing test write more tests and refactor you code to accommodate all possible tests.

##Level 1

The first step in an active church directory is to be able to enter the information for each family in the church. Store this information to a file for future retrieval.

The secretary needs to be able to input an address with city and state along with a home phone number (if one exists) for each family. The family may only be a single person or a mother and father with children and everything in between. Each person will have a name (first, middle, last), a date of birth, and some will have a cell phone number.

A sample JSON object may be:

```
family: {
  address: "123 Main St",
  city: "Somewhere",
  state: "TN",
  adults: [
    {
      name: "Jane Smith",
      birthDate: 1987-02-27,
      cellPhone: "6155551234"
    },
    {
      name: "James Smith",
      birthDate: 1983-8-21,
      cellPhone: "6155551235"
    }
  ]
  children: [
    {
      name: "Johnny Smith",
      birthDate: 2010-05-21,
      cellPhone: null
    }
  ]
}
```

##A Step Further

Make your directory indexable. The church has asked that they be able to look up families by last name so they can quickly update their information such as change of address or new child.

