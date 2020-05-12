const { DataStore } = require('notarealdb');

const store = new DataStore('./data');

module.exports = {
   questions:store.collection('questions'),
};