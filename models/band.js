const { v4: uuidv4='no id'} = require('uuid');
class Band{
    constructor( name='no-name'){
       
        this.id = uuidv4();//IDENTIFICADOR UNICO
        this.name= name;
        this.votes= 0;

    }
}

module.exports = Band;