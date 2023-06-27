const userRouter = require('~/routers/userRouter');
const siteRouter = require('~/routers/siteRouter');
const productRouter = require('~/routers/productRouter');
const genreRouter = require('~/routers/genreRouter');
const categoryRouter = require('~/routers/categoryRouter');

function routers(app) {
    app.use('/users', userRouter);
    app.use('/api/product', productRouter);
    app.use('/api/genre', genreRouter);
    app.use('/api/category', categoryRouter);
    app.use('/', siteRouter);
}
module.exports = routers;
