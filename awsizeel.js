/**
 * Created by Adron Hall on 1/18/16.
 */

var AWS = require('aws-sdk');

AWS.config.update({region: 'us-west-1'});

new AWS.EC2().describeInstances(function (error, data) {
    if (error) {
        console.log(error); // an error occurred
    } else {
        console.log(data); // request succeeded
    }
});