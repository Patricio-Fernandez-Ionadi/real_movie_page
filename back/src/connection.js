const {MONGO_DB_CONNECTION} = process.env
const mongoose = require('mongoose')

mongoose.connect(MONGO_DB_CONNECTION, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(()=>{
	console.log("DB Connected")
}).catch(err => {
	console.log(err)
	mongoose.disconnect()
})

