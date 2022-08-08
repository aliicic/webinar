const express = require("express");
const { default: mongoose } = require("mongoose");
const path = require("path");
const createError = require("http-errors");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const cors = require("cors");

require("dotenv").config();
const { AllRoutes } = require("./router/router");
const { initialSocket } = require("./utils/initSocket");
const { socketHandler } = require("./socket.io");

// const { COOKIE_PARSER_SECRET_KEY } = require("./utils/constans");
// const { clientHelper } = require("./utils/client");
// const { uploadFile } = require("./utils/multer");
// const fileUpload = require("express-fileupload");
module.exports = class Application {
  #app = express();
  #DB_URI;
  #PORT;
  constructor(PORT, DB_URI) {
    this.#PORT = PORT;
    this.#DB_URI = DB_URI;
    this.configApplication();
    // this.initClientSession();
    // this.initTemplateEngine();
    // this.initRedis();
    this.connectToMongoDB();
    this.createServer();
    this.createRoutes();
    this.errorHandling();
    this.x();
  }
  configApplication() {
    this.#app.use(cors());
    // this.#app.use(morgan("dev"));
    this.#app.use(express.json());
    this.#app.use(express.urlencoded({ extended: true }));
    this.#app.use(express.static(path.join(__dirname, "..", "public")));
    this.#app.use(
      "/api-doc",
      swaggerUI.serve,
      swaggerUI.setup(
        swaggerJsDoc({
          swaggerDefinition: {
            openapi: "3.0.0",
            info: {
              title: "icic",
              version: "2.0.0",
              description:"test",
              contact: {
                name: "test",
                url: "test",
                email: "test",
              },
            },
            servers: [
              {
                url: "http://localhost:4000",
              },
              // {
              //   url: "http://localhost:5000",
              // },
            ],
            // components: {
            //   securitySchemes: {
            //     BearerAuth: {
            //       type: "http",
            //       scheme: "bearer",
            //       bearerFormat: "JWT",
            //     },
            //   },
            // },
            // security: [{ BearerAuth: [] }],
          },
          apis: ["./api/router/*.js"],
        }),
        { explorer: true }
      )
    );
  }
  createServer() {
    const http = require("http");
    const server = http.createServer(this.#app);
    const io = initialSocket(server);
    socketHandler(io);
    server.listen(this.#PORT, () => {
      console.log("run > http://localhost:" + this.#PORT);
    });
  }
  connectToMongoDB() {
    mongoose.connect(this.#DB_URI, (error) => {
      if (!error) return console.log("conected to MongoDB");
      return console.log(error.message);
    });
    mongoose.connection.on("connected", () => {
      console.log("mongoose connected to DB");
    });
    mongoose.connection.on("disconnected", () => {
      console.log("mongoose connection is disconnected");
    });
    process.on("SIGINT", async () => {
      await mongoose.connection.close();
      console.log("disconnected");
      process.exit(0);
    });
  }

  createRoutes() {
    this.#app.use(AllRoutes);
  }
  x() {
    if (require.main === module) {
      const port = process.env.PORT || 3001;
      this.#app.listen(port, () => {
        // eslint-disable-next-line no-console
        console.log(`API server listening on port ${port}`);
      });
    }
  }
  errorHandling() {
    this.#app.use((req, res, next) => {
      next(createError.NotFound("آدرس مورد نظر یافت نشد"));
    });
    this.#app.use((error, req, res, next) => {
      const serverError = createError.InternalServerError();
      const statusCode = error.status || serverError.status;
      const message = error.message || serverError.message;
      return res.status(statusCode).json({
        statusCode,
        errors: {
          message,
        },
      });
    });
  }
};
