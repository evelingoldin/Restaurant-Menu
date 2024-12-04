## Restaurant Menu API
This is a GraphQL API for retrieving restaurant menu data.

### Why I Chose NestJS
NestJS was chosen for this project due to its modular architecture, dependency injection, and built-in support for GraphQL. These features make it an excellent choice for building scalable and maintainable APIs. The structured approach provided by NestJS ensures clear separation of concerns, which simplifies testing and future enhancements.

- **GraphQL Resolvers**: Handle incoming queries (`getCategories`, `getMenuItems`) and delegate logic to the service layer.
- **Service Layer**: Processes menu-related operations and interacts with static data or, in a real-world scenario, a database.
- **Static Data**: Stored in `menu-data.ts`, representing a predefined dataset for the restaurant's menu.

### Installation
1. Clone the repository.
2. Install dependencies: `npm install`
3. Start the server: `npm run start`

### Testing
Run unit tests: `npm run test`
Run e2e tests: `npm run test:e2e`

### Usage
Visit `http://localhost:8080/graphql` and use the GraphQL Playground to test queries.

### Example queries:

# Fetching All Categories
query {
  getCategories {
    name
    items {
      name
      price
    }
  }
}
# Expected Result: Returns all categories with their names and items.

# Fetching Menu Items for a Specific Category
query {
  getMenuItems(categoryName: "Appetizers") {
    name
    price
  }
}
# Expected Result: Returns menu items for the specified category (e.g., "Appetizers").

# Invalid Category Handling
query {
  getMenuItems(categoryName: "NonExistentCategory") {
    name
    price
  }
}
# Expected Result: Returns an empty array.




