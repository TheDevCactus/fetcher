
export interface Order { // references components.schemas.Order
  id: number,
  petId: number,
  quantity: number,
  shipDate: string,
  status: "placed" | "approved" | "delivered",
  complete: boolean
};

export interface Address { // references components.schemas.Address
  street: string,
  city: string,
  state: string,
  zip: string
};

export interface Customer { // references components.schemas.Customer
  id: number,
  username: string,
  address: Array<Address>
};

export interface Category { // references components.schemas.Category
  id: number,
  name: string
}

export interface User { // references components.schemas.User
  id: number,
  username: string,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  phone: string,
  userStatus: number
};

export interface Tag { // references components.schemas.Tag
  id: number,
  name: string
};

export interface Pet { // references components.schemas.Pet
  id: number,
  name: string,
  category: Category,
  photoUrls: Array<string>,
  tags: Array<Tag>,
  status: "available" | "pending" | "sold"
};

export interface ApiResponse { // references components.schemas.ApiResponse
  code: number,
  type: string,
  message: string
};

/**
 * @description This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about\nSwagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!\nYou can now help us improve the API whether it's by making changes to the definition itself or to the code.\nThat way, with time, we can improve the API in general, and expose some of the new features in OAS3.\n\nSome useful links:\n- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)\n- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)
 * @version 1.0.17
 */
const SwaggerPetstore = {
  _baseURL: "https://petstore3.swagger.io/api/v3",
  pet: {
    put: async () => {

    },
    post: async () => {

    },
    findByStatus: {
      get: async () => {

      }
    },
    findByTags: {
      get: async () => {

      }
    },
    byPetId: { // this references /pet/{petId}
      get: async () => {

      }, 
      post: async () => {

      },
      delete: async () => {

      },
      uploadImage: {
        post: async () => {

        }
      },
    }
  },
  store: {
    inventory: {
      get: async () => {

      }
    },
    order: {
      post: async () => {

      },
      byOrderId: { // this references /store/order/{orderId}
        get: async () => {

        },
        delete: async () => {

        }
      }
    }
  },
  user: {
    post: async () => {

    },
    createWithList: {
      post: async () => {

      }
    },
    login: {
      get: async () => {

      }
    },
    logout: {
      get: async () => {

      }
    },
    byUsername: { // references /user/{username}
      get: async () => {

      },
      put: async () => {

      },
      delete: async () => {

      }
    }
  }
}
