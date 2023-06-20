const User = require('~/app/Models/UserModels')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET } = require('~/config')
const { multipleMongooseToObject, mongooseToObject } = require('~/util/mongoose')
const { json } = require('express')

class UserController {
        async register(req, res, next) {
                const { username, email, password } = req.body
                try {
                        const existingUser = await User.findOne({ email: email })
                        if (existingUser) {
                                return res.status(401).json({ message: 'User already exists' })
                        }
                        const hashedPassword = await bcrypt.hash(password, 10)
                        const results = await User.create({
                                email: email,
                                password: hashedPassword,
                                username: username
                        })

                        const token = jwt.sign({ email: results.email, id: results._id }, SECRET)
                        res.status(201).json({ user: results, token: token })
                }
                catch (error) {
                        console.log(error);
                        res.status(500).json({ message: "Something went wrong" })
                }

        }
        get(req, res, next) {
                User.find({})
                        .then(genre => {
                                res.json(genre)
                        })
                        .catch(next)
        }

        update(req, res, next) {
                User.updateOne({ _id: req.params.id }, req.body)
                        .then(() => {
                                res.sendStatus(200); // Trả về status code 200 nếu lưu thành công
                        })
                        .catch((error) => {
                                res.sendStatus(500); // Trả về status code 500 nếu có lỗi xảy ra
                        });
        }
        delete(req, res, next) {
                User.deleteOne({ _id: req.params.id })
                        .then(() => {
                                res.sendStatus(200); // Trả về status code 200 nếu lưu thành công
                        })
                        .catch((error) => {
                                res.sendStatus(500); // Trả về status code 500 nếu có lỗi xảy ra
                        });
        }
        login(req, res, next) {

                const { username, email, password } = req.body
                User.findOne({ email: email })
                        .then((user) => {
                                if (!user) {
                                        res.status(401).json({ message: "User not found" })
                                }
                                bcrypt.compare(password, user.password)
                                        .then((success) => {
                                                if (!success) {
                                                        res.status(401).json({ message: "Incorrect account or password" })
                                                }
                                                else {
                                                        const token = jwt.sign({ email: user.email, id: user._id }, SECRET)
                                                        res.status(201).json({ user: user, token: token })
                                                }
                                        })
                                        .catch(err => {
                                                res.status(401).json({ message: "Incorrect account or password" })
                                        })
                        })
                        .catch(err => {
                                res.status(401).json({ message: "Incorrect account or password" })
                        })
        }

}
module.exports = new UserController();
