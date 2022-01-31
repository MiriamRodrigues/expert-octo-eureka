let Accounts = []

exports.deposit = (data) => {
    
    if(Accounts.length === 0){
        var newAccount = {
            "id" : data.destination,
            "balance" : data.amount
        }
        Accounts.push(newAccount);
        return {"destination" : newAccount};
    }

    else{
        var idx = Accounts.findIndex(i => i.id === data.destination)

        if(idx === -1){
            var newAccount = {
                "id" : data.destination,
                "balance" : data.amount
            }
            Accounts.push(newAccount);
            return {"destination" : newAccount};
        }
        else if(idx > -1){
            Accounts[idx].balance += data.amount;

            return {"destination" : Accounts[idx]};
        }        
    }
}

exports.withdraw = (data) => {
    var idx = Accounts.findIndex(i => i.id === data.origin)
    if(idx === -1){
        return 0
    }
    else if(idx > -1){
        Accounts[idx].balance -= data.amount;

        return {"origin" : Accounts[idx]};
    }
}

exports.transfer = (data) => {
    var idxOrigin = Accounts.findIndex(i => i.id === data.origin)
    var idxDestination = Accounts.findIndex(i => i.id === data.destination);

    if(idxOrigin === -1 || idxDestination === -1){
        return 0;
    }

    else if(idxOrigin > -1 && idxDestination > -1){
        Accounts[idxOrigin].balance -= data.amount;
        Accounts[idxDestination].balance += data.amount;

        return {
           "origin" : Accounts[idxOrigin],
           "destination" : Accounts[idxDestination]
        }
    }
}

exports.balance = (data) => {
    var idx = Accounts.findIndex(i => i.id === data)

    if(idx === -1){
        return 0
    }

    else if(idx > -1){
        return Accounts[idx].balance;
    }
}

exports.reset = () => {
    Accounts = [];
    return "Ok";
}