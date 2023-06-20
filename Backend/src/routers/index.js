const UserRouter = require('~/routers/API/userRouter');
const siteRouter = require('~/routers/API/siteRouter');


function routers(app) {
    app.use('/users', UserRouter);
    app.use('/', siteRouter);
}
module.exports = routers;
