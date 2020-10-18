# Mock-up-api-saur

![http://github.michalrafalski.com/mockupapisaur.png](http://github.michalrafalski.com/mockupapisaur.png)

## Requirements

- nodeJS 12.13+
- yarn (for workspaces)

## To start project:

Please check if you have `yarn` installed globally

Clone project

### `git clone git@github.com:Websitescity/mockupapisaur.git`

Go to the directory

### `cd mockupapisaur`

Download dependencies

### `yarn`

Run Mock-up API...saur

### `yarn dev`


## Secure endpoints

```js
const accessRules = auth.rewriter({
  
  //User must be logged to write or read the resource.
  dinosaursfood: 660,
  
  // No one can write the resource. Everyone can read the resource.
  dinosaurs: 444
})
```


|    Route     | Resource permissions                                                                                 |
| :----------: | :--------------------------------------------------------------------------------------------------- |
| **`/664/*`** | User must be logged to _write_ the resource. <br> Everyone can _read_ the resource.                  |
| **`/660/*`** | User must be logged to _write_ or _read_ the resource.                                               |
| **`/644/*`** | User must own the resource to _write_ the resource. <br> Everyone can _read_ the resource.           |
| **`/640/*`** | User must own the resource to _write_ the resource. <br> User must be logged to _read_ the resource. |
| **`/600/*`** | User must own the resource to _write_ or _read_ the resource.                                        |
| **`/444/*`** | No one can _write_ the resource. <br> Everyone can _read_ the resource.                              |
| **`/440/*`** | No one can _write_ the resource. <br> User must be logged to _read_ the resource.                    |
| **`/400/*`** | No one can _write_ the resource. <br> User must own the resource to _read_ the resource.             |



## Get access

### Register user

Any of the following routes registers a new user :

- **`POST /register`**
- **`POST /signup`**
- **`POST /users`**

**`email`** and **`password`** are required in the request body :

```http
POST /register
{
  "email": "olivier@mail.com",
  "password": "bestPassw0rd"
}
```

Reponse:
```http
201 Created
{
  "accessToken": "xxx.xxx.xxx"
}
```

### Login

Any of the following routes logs an existing user in :

- **`POST /login`**
- **`POST /signin`**

**`email`** and **`password`** are required:

```http
POST /login
{
  "email": "olivier@mail.com",
  "password": "bestPassw0rd"
}
```

The response contains the JWT access token (expiration time of 1 hour) :

```http
200 OK
{
  "accessToken": "xxx.xxx.xxx"
}
```


## Author
![mr](https://michalrafalski.com/img/michalrafalski.ee11db8e.png)
[Michał Rafalski](https://michalrafalski.com/)