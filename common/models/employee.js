// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-database
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

module.exports = function(Employee) {
    Employee.remoteMethod(
        'getNameDindin',
        {
            description: 'get name like -> Dindin',
            accepts: [
                { arg: 'firstname', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getNameDindin', verb: 'get' }
        }
    );

    Employee.getNameDindin = function(firstname, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    first_name : {
                        like : firstname
                    }
                }
            }
            Employee.find(filter, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Nama Tidak Dapat Ditemukan")
                    err.statusCode = 404
                    reject (err)
                }
                resolve(result)
            })
        }).then(function(res){
            if (!res) callback (err)
            return callback (null, res)
        }).catch(function(err){
            callback(err);
        });
    }

    Employee.remoteMethod(
        'getLastName',
        {
            description: 'get last name like -> Mahpudin',
            accepts: [
                { arg: 'lastname', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getLastName', verb: 'get' }
        }
    );

    Employee.getLastName = function(lastname, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    last_name : {
                        like : lastname
                    }
                }
            }
            Employee.find(filter, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Nama Akhir Tidak Dapat Ditemukan")
                    err.statusCode = 404
                    reject (err)
                }
                resolve(result)
            })
        }).then(function(res){
            if (!res) callback (err)
            return callback (null, res)
        }).catch(function(err){
            callback(err);
        });
    }

    Employee.remoteMethod(
        'getEmail',
        {
            description: 'get email like -> mahpudeen@gmail.com',
            accepts: [
                { arg: 'email', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getEmail', verb: 'get' }
        }
    );

    Employee.getEmail = function(email, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    email_address : {
                        like : email
                    }
                }
            }
            Employee.find(filter, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Email Tidak Dapat Ditemukan")
                    err.statusCode = 404
                    reject (err)
                }
                resolve(result)
            })
        }).then(function(res){
            if (!res) callback (err)
            return callback (null, res)
        }).catch(function(err){
            callback(err);
        });
    }

};