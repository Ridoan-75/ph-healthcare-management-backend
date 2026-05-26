import { Response } from "express";

interface IResponseData<T> {
  httpStatusCode: number;
  message: string;
  data?: T;
  success: boolean;
}

export const sendResponse = <T>(
  res: Response,
  responseData: IResponseData<T>,
) => {
  const { httpStatusCode, message, data, success } = responseData;
  return res.status(httpStatusCode).json({
    success,
    message,
    data,
  });
};
