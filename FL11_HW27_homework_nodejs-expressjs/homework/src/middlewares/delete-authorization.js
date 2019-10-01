module.exports = function (req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).json({ error: 'No credentials sent!' });
    }
    next();
};
