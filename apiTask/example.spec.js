const { test, expect } = require('@playwright/test');
const axios = require('axios');
test('api test', async ({ page }) => {
    await test.step('get request', async () => {
        await axios
        .get("https://reqres.in/api/users?page=2")
        .then(function (response) {
          console.log(response.data);
          console.log(response.status);
          console.log(response.statusText);
        });

        await test.step('get request 2', async () => {
          await axios({
            method: 'get',
            url: 'https://reqres.in/api/users/2',
            })
            .then(function (response){
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            });
          });
      })

      await test.step('get request 3', async () => {
        await axios
            .get("https://reqres.in/api/users/23")
            .then(function (response) {
                console.log(response.data);
                console.log(response.status);
                console.log(response.statusText);
            })
            .catch(function (error) {
              console.log("error detected!!!!!");
                console.log(error.code);
              });
        });

        await test.step('API POST, checking keys data and compare key with value', async () => {
          await axios({
              method: 'post',
              url: 'https://reqres.in/api/users',
              data: {
                  "name": "morpheus",
                  "job": "leader"
                }
              })
              .then(function (response){
              console.log(response.data);
              console.log(response.status);
              console.log(response.statusText);
              });
          });

          await test.step('API POST, checking keys data and compare key with value', async () => {

            await axios({
                method: 'put',
                url: 'https://reqres.in/api/users/2',
                data: {
                    "name": "morpheus",
                    "job": "zion resident2"
                }
                })
                .then(function (response){
                console.log(response.data);
                console.log(response.status);
                console.log(response.statusText);
                });
            });

});
