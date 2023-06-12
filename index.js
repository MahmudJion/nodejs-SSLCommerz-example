const express = require("express");
const PORT = 8000;
const app = express();

const axios = require('axios');
const qs = require('qs');

let post_body = {};
post_body['store_id'] = 'testbox';
post_body['store_passwd'] = 'qwerty';
post_body['total_amount'] = 100;
post_body['currency'] = "BDT";
post_body['tran_id'] = "1234";
post_body['success_url'] = "http://yoursite.com/success.php";
post_body['fail_url'] = "http://yoursite.com/fail.php";
post_body['cancel_url'] = "http://yoursite.com/cancel.php";
post_body['emi_option'] = 0;
post_body['cus_name'] = "Customer Name";
post_body['cus_email'] = "cust@yahoo.com";
post_body['cus_phone'] = "01700000000";
post_body['cus_add1'] = "Dhaka";
post_body['cus_city'] = "Dhaka";
post_body['cus_country'] = "Bangladesh";
post_body['multi_card_name'] = "mastercard"
post_body['product_name'] = "Test";
post_body['product_category'] = "Test Category";
post_body['product_profile'] = "general";
post_body['shipping_method'] = "NO";
post_body['ship_name'] = "Customer Name";
post_body['ship_add1'] = "Dhaka";
post_body['ship_city'] = "Dhaka";
post_body['ship_country'] = "Bangladesh";

const url = 'https://sandbox.sslcommerz.com/gwprocess/v4/api.php';

async function start() {
  try {
    const response = await axios.post(url, qs.stringify(post_body));

    app.get("/sslcommerz", (req, res) => {
      res.send(response.data);
    });

    app.listen(PORT, () => {
      console.log(`Server is listening on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();