import { EventEmitter } from "events"
import https from "https"
import express from "express"
import * as iolib from "socket.io"
import sql from "./sql.mjs"

export default class CodeverseApp extends EventEmitter {

	#app; #httpsServer; #io; #sql
	constructor(config) {
		this.#app = express()
		this.#httpsServer = https.createServer(config.https, app)
		this.#io = new iolib.Server(httpsServer)
		this.#sql = sql(config.sql)

		this.#httpsServer.listen(config.port, () => { console.log(`Server is running on ${config.port}`) }) // debug log

		this.#io.on("connection", socket => console.log("connection:", socket))

		this.#io.on("error", console.error)
	}

	get express() {
		return this.#app
	}

	get query() {
		return this.#sql.query
	}

}
