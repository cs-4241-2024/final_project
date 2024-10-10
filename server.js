"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mongodb_1 = require("mongodb");
var cors_1 = require("cors");
var dotenv_1 = require("dotenv");
var bcrypt_1 = require("bcrypt");
var jsonwebtoken_1 = require("jsonwebtoken");
dotenv_1.default.config();
var app = (0, express_1.default)();
var port = process.env.PORT || 3000;
var uri = "mongodb+srv://".concat(process.env.USER, ":").concat(process.env.PASS, "@").concat(process.env.HOST);
var client = new mongodb_1.MongoClient(uri);
var secretKey = process.env.SECRET_KEY || 'your_secret_key';
var usersCollection = null;
var scoresCollection = null;
function run() {
    return __awaiter(this, void 0, void 0, function () {
        var db, err_1;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, client.connect()];
                case 1:
                    _a.sent();
                    console.log("Connected to MongoDB");
                    db = client.db("tetris");
                    usersCollection = db.collection("users");
                    scoresCollection = db.collection("scores");
                    // Middleware to check connection
                    app.use(function (req, res, next) {
                        if (usersCollection !== null && scoresCollection !== null) {
                            next();
                        }
                        else {
                            res.status(503).send();
                        }
                    });
                    // User registration
                    app.post('/register', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                        var _a, username, password, hashedPassword, result, err_2;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _b.trys.push([0, 3, , 4]);
                                    _a = req.body, username = _a.username, password = _a.password;
                                    return [4 /*yield*/, bcrypt_1.default.hash(password, 10)];
                                case 1:
                                    hashedPassword = _b.sent();
                                    return [4 /*yield*/, usersCollection.insertOne({ username: username, password: hashedPassword })];
                                case 2:
                                    result = _b.sent();
                                    res.json(result);
                                    return [3 /*break*/, 4];
                                case 3:
                                    err_2 = _b.sent();
                                    console.error('Registration error:', err_2);
                                    res.status(500).send(err_2);
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); });
                    // User login
                    app.post('/login', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                        var _a, username, password, user, _b, token, err_3;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _c.trys.push([0, 4, , 5]);
                                    _a = req.body, username = _a.username, password = _a.password;
                                    return [4 /*yield*/, usersCollection.findOne({ username: username })];
                                case 1:
                                    user = _c.sent();
                                    _b = user;
                                    if (!_b) return [3 /*break*/, 3];
                                    return [4 /*yield*/, bcrypt_1.default.compare(password, user.password)];
                                case 2:
                                    _b = (_c.sent());
                                    _c.label = 3;
                                case 3:
                                    if (_b) {
                                        token = jsonwebtoken_1.default.sign({ username: username }, secretKey, { expiresIn: '1h' });
                                        res.json({ token: token });
                                    }
                                    else {
                                        res.status(401).send('Invalid credentials');
                                    }
                                    return [3 /*break*/, 5];
                                case 4:
                                    err_3 = _c.sent();
                                    console.error('Login error:', err_3);
                                    res.status(500).send(err_3);
                                    return [3 /*break*/, 5];
                                case 5: return [2 /*return*/];
                            }
                        });
                    }); });
                    // Middleware to authenticate token
                    app.use(function (req, res, next) {
                        var token = req.headers['authorization'];
                        if (token) {
                            jsonwebtoken_1.default.verify(token, secretKey, function (err, decoded) {
                                if (err) {
                                    return res.status(401).send('Invalid token');
                                }
                                else {
                                    req.body.username = decoded.username;
                                    next();
                                }
                            });
                        }
                        else {
                            res.status(401).send('No token provided');
                        }
                    });
                    // Submit score
                    app.post('/submit-score', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                        var _a, username, score, result, err_4;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _b.trys.push([0, 2, , 3]);
                                    _a = req.body, username = _a.username, score = _a.score;
                                    return [4 /*yield*/, scoresCollection.insertOne({ username: username, score: score, date: new Date() })];
                                case 1:
                                    result = _b.sent();
                                    res.json(result);
                                    return [3 /*break*/, 3];
                                case 2:
                                    err_4 = _b.sent();
                                    console.error('Submit score error:', err_4);
                                    res.status(500).send(err_4);
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); });
                    // Get leaderboard
                    app.get('/leaderboard', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                        var leaderboard, err_5;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, scoresCollection.find().sort({ score: -1 }).limit(10).toArray()];
                                case 1:
                                    leaderboard = _a.sent();
                                    res.json({ leaderboard: leaderboard });
                                    return [3 /*break*/, 3];
                                case 2:
                                    err_5 = _a.sent();
                                    console.error('Leaderboard retrieval error:', err_5);
                                    res.status(500).send(err_5);
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); });
                    // Serve the main page
                    app.get('/', function (req, res) {
                        res.sendFile(__dirname + '/public/index.html');
                    });
                    // Start the server
                    app.listen(port, function () {
                        console.log("Server running at http://localhost:".concat(port, "/"));
                    });
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.error(err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
run();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.static('dist'));
app.get('/leaderboard.html', function (req, res) {
    res.sendFile(__dirname + '/public/leaderboard.html');
});
app.use(express_1.default.static('dist'));
// Log all requests
app.use(function (req, res, next) {
    console.log('url:', req.url);
    next();
});
