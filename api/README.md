# Weather App Back End (WIP)
This project uses Node.JS, Express and Typescript. It is currently at a design stage with no model implementation. \
The REST API serves mocked data as no model has been implemented. This model can be implemented as a relational database (TypeORM is a nice ORM to begin with), or a SQS queue + DynamoDB from AWS for minute-to-minute updates. \

## Considerations
* The user's location should be provided by the client and avoid third-party services. Thus, a `city` parameter must be passed to each endpoint. In a real-life scenario, coordinates should be useful for precise weather data.
* Testing is fundamental, currently as a TO-DO.