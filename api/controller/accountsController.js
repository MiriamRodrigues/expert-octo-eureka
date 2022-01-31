const Accounts = require('../model/accountsModel');

exports.postReset = (req, res, next) => {
    res.status(200).send(Accounts.reset())

};

exports.postEvent = (req, res, next) => {
    switch(req.body.type){
        case 'deposit':
            res.status(201).json(Accounts.deposit(req.body))
            break;
        case 'withdraw':
            var result = Accounts.withdraw(req.body);
            if(result === 0){
                res.status(404).json(result)
            }
            else {
                res.status(201).json(result)
            }
            break;
        case 'transfer':
            var result = Accounts.transfer(req.body);
            if(result === 0){
                res.status(404).json(result)
            }
            else {
                res.status(201).json(result)
            }
            break;
        default:
        break;
    }
}

exports.getBalance = (req, res, next) => {
    var result = Accounts.balance(req.query.account_id)

    if(result === 0){
        res.status(404).json(result);
    }
    else{
        res.status(200).json(result);
    }
}