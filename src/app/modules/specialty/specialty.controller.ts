/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, RequestHandler, Response } from "express";
import { SpecialtyService } from "./specialty.service";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";

// create specialty
const createSpecialty = catchAsync(async (req: Request, res: Response) => {
  const result = await SpecialtyService.createSpecialty(req.body);
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "specialty created successfully",
    data: result,
  });
});

// get all specialties
const getAllSpecialties = catchAsync(async (req: Request, res: Response) => {
  const result = await SpecialtyService.getAllSpecialties();
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "specialties fetched successfully",
    data: result,
  });
});

// delete specialty
const deleteSpecialty = catchAsync(async (req: Request, res: Response) => {
  const result = await SpecialtyService.deleteSpecialty(
    req.params.id as string,
  );
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "specialty deleted successfully",
    data: result,
  });
});

// update specialty
const updateSpecialty = catchAsync(async (req: Request, res: Response) => {
  const result = await SpecialtyService.updateSpecialty(
    req.params.id as string,
    req.body,
  );
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "specialty updated successfully",
    data: result,
  });
});

export const SpecialtyController = {
  createSpecialty,
  getAllSpecialties,
  deleteSpecialty,
  updateSpecialty,
};
