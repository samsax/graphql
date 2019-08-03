const mongoose = require('mongoose');

const clearDatabase = () => {
    return new Promise (resolve=>{
        let count = 0;
        const maxObjects = Object.keys(mongoose.connection.collection).length;
        
        for (const i in mongoose.connection.collection) {
            mongoose.connection.collection[i].remove(() => {
                count++;
                if(count === maxObjects){
                    resolve();
                }
            })
        }

    });
}

module.exports = async function setupTest(){
    await clearDatabase();
};
