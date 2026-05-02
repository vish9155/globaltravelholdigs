import winston from "winston";

let loggers=winston.createLogger({
    level:"info",
    transports:[
        new winston.transports.File({filename:'app.log'}),
        new winston.transports.Console()
    ]
    
})
export default loggers