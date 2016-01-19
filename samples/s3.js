/**
 * Created by Adron Hall on 1/18/16.
 */

s3.createBucket({Bucket: 'git-repo-copies'}, function () {
    var params = {Bucket: 'git-repo-copies', Key: 'myKey', Body: 'Hello!'};

    s3.putObject(params, function (err, data) {
        if (err) {
            console.log(err)
        }
        else {
            console.log("Successfully uploaded data to myBucket/myKey");
        }
    });
});