import { RequestHandler } from "express";

export const login:RequestHandler<{
    email: string;
    password: string;
}, {status:number}> = async (req, res, next) => {
    // const { email, password } = req.body;
    console.log(req.body)
    // console.log(email)
    // res.status(200).json({
    //     success: true,
    //     token: token,
    //     user: user,
    //   });
};

// export const register:RequestHandler = async (req: Request, res: Response) => {};