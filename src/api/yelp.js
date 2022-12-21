import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer DdvyfqhuW2vArLnqIHqp0IzD6DHU1yn9qb3NQK2eqFv4B49ImjQmp_ATvaKGRBTATqqLC6lB-of2Jb7l_pTy2UYjHPsWjIl2nwGGaOS4xmbfOY1lGvnkm18GVraVY3Yx",
  },
});
