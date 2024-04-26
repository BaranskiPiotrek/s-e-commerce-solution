# E-Commerce DB Model


## User management
1) Users 
    - id -> uuid
    - email - varchar
    - phone - number
    - name - varchar
    - surname - varchar
    - createdAt- timestamp
    - updatedAt- timestamp
    - last_login - timestamp

2) Social profiles to keep information to authorization

    - user_id - uuid - relation to user
    - type - ENUM field to keep what social media that is 
    - created_at - timestamp

3) Credentials (optional that could be part of users)
    - user_id - uuid
    - password_hash- varchar
    - slat - varchar


## Carts management

1) Carts 

    - id - uuid
    - updatedAt- timestamp
    - createdAt- timestamp
    - status - enum
    
2) Single cart item 
    - cart_id - uuid 
    - product_id - uuid
    - price - number
    - quantity - number

## Product management

1) Product
    - id - uuid
    - category_id - uuid 
    - updatedAt- timestamp
    - createdAt- timestamp
    - title - varchar
    - description- varchar
    - price - number
    - picture - text -> address to S3 database with pictures


2) Categories

    - id - uuid
    - name- varhcar
    - description - varchar
    - updatedAt- timestamp
    - createdAt- timestamp

3) Review

    - id - uuid
    - user_id - uuid - who make that review from system
    - product_id - uuid 

4) Favorites
    - user_id -uuid
    - product_id - uuid


## Order management

1) Orders

    - id - uuid
    - user_id - uuid 
    - createdAt- timestamp

2) Order item 
    - id - uuid
    - order_id - uuid
    - product_id  - uuid 
    - price - number
    - quantity - number

3) Payment 
    - order_id - uuid
    - amount - number
    - provider - varchar - consider to have some payment providers
    - status - ENUM
    - updatedAt- timestamp
    - createdAt- timestamp

## Ship management
    - TODO describe that