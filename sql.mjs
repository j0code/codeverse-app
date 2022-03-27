import * as sqllib from "mysql"

export default function connect(config) {
	const sql = sqllib.createConnection(config)

	sql.connect(e => {
		if(e) {console.log(e);return}
		console.log("Connected to mySQL!")
	})

	return sql
}
