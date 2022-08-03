import axios from "axios";

 export const getStore = async () =>{
     return await axios.get("https://nongnghiepd24.herokuapp.com/api/lists-store/0").then(res => {
         return res.data;
     }).catch(error => {
         return error.response
     })
 }

 export const getProduct = async () =>{
     return await axios.get("https://nongnghiepd24.herokuapp.com/api/product-store/61d3b0d36e60132fd8f4d175/0").then(res => {
         return res.data;
     }).catch(error => {
         return error.response
     })
 }

 export const getDetails = async (id) =>{
     return await axios.get(`https://nongnghiepd24.herokuapp.com/api/details-product/${id}`).then(res => {
         return res.data;
     }).catch(error =>{
         return error.response
     })
 }