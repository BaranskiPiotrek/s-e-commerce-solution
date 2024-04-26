
# E-Commerce Website Architecture on AWS

## Frontend
- **Hosting**: 
  - Amazon S3 by serve static React files
  - If that need Server Side rendering that could be good to use here next.js which is fit in modern solution for faster loading app 
  - Another approach build docker images for react and deploy that to ECR and then to ECS and server like service. (my choice)
- **Content Delivery Network (CDN)**: Amazon CloudFront (optional)
  - Cache content globally for faster delivery
  - That approach need to be investigated if will be satisfied but will be good if S3 approach will be chosen.
-  **Authentication**
    - Amazon Cognito, Facebook, Google popular social services
    - Email/password approach 


## Backend
1) AWS Lambda with API Gateway

Lambda function will be integrated with API gateway to provide serverless solution, reading data via gateway directly with RDS. 

2) ECS or EKS ( that would even recommend ) -
native service like node js (express, nest), Spring Boot or even python with flask, Picking node as I have latest experience

Kubernetes Service could be here best approach for serving code and infrastructure in one place

## Database
1) Amazon RDS or Amazon DynamoDB

For RDS I would like to pick Postgres as that support partitioning, such service can have huge list of users

## Search 
1) Consider to use elasticsearch for search product as that should be quick

## Monitoring and Logging
1) Use Cloud watch to analyze logs
2) For native solution integrate Grafana and Prometheus to have rich information about current solution with env

