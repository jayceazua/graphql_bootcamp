# GraphQL Learning

Creates fast and flexible APIs, giving clients complete control to ask for just the data they need.
Fewer HTTP requests, flexible data querying less code to manage.

- Client sending the query to the server, uses a single endpoint.
- Unlike the manual work of updating REST APIs, GraphQL self-documents.
- when querying for an object select which fields you need exactly from the object
Example:

```
query {
  hello // request what types/ field you want...
  courseInstructor
  course
  me {
    id
    name
    posts {
      id
      title
      body
    }
  }
}
```


Resources:
- [Demo GraphQL](https://graphql-demo.mead.io)
- [Babel](babeljs.io)
