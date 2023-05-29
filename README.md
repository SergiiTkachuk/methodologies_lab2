# Methodologies_lab2

Variant number calculation:

Gradebook number % 4

1230 % 4 = 2

The first implementation is a doubly linked list (https://github.com/SergiiTkachuk/methodologies_lab2/commit/9e1d79df053e8aa779a7cc8faf3b0ab1ab687508).

The second implementation is a list based on built-in collections (the last commit).

***

__How to build__

The projects is written on Node.js, so you'll need it to build the project.

I used Node.js 18.15.0 version, it works.

Also you'll need npm, it is usually installed together with Node.

To install the dependencies, enter this command:
```
npm install
```

To run the file with demonstration of the list working, enter this command:
```
node ./index.js
```

To run the tests, enter this command:
```
npm test
```

All the commands must be run in the project root folder.

***

The project is integrated with Github Actions CI. Here is the commit where the tests failed: https://github.com/SergiiTkachuk/methodologies_lab2/commit/6ac7172f32c9e7afa72c4e2cf365250c23fc155c

***

__Conclusion:__

This lab work has been incredibly valuable to me as I had no prior experience writing tests. It has taught me how to write effective tests and their importance in ensuring the correctness of my code. The tests have been particularly helpful in identifying inconsistencies between the expected behavior and the actual behavior of my code, leading to the discovery and resolution of several bugs. Overall, this experience has significantly improved my understanding of testing and its role in software development.