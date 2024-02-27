const userRouter = require('../routes/userRoutes');
const loginRouter = require('../routes/loginRoutes');

function apiRouter(app) {
    app.use("/api/auth", loginRouter);
    app.use("/api/usuarios", userRouter);
}

module.exports = apiRouter;