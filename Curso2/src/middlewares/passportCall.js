import passport from "passport";

const passportCall = (strategy, options = {}) => {
    return (req, res, next) => {
        passport.authenticate(strategy, options, async (error, user, info) => {
            if (error) return next(error);
            if (!options.strategyType) {
                return res.status(500).json({ status: "error", error: "strategyType not defined" });
            }
            if (!user) {
                switch (options.strategyType) {
                    case 'LOCALS': {
                        return res.status(401).send({ status: "error", error: "este error esta en passport call!!" })
                    }
                    case 'JWT': {
                        req.user = null;
                        return next();
                    }
                }
            }
            req.user = user;
            next();
        })(req, res, next);
    }
}

export default passportCall;