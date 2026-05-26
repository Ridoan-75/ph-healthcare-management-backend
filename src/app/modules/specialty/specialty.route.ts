import { Router } from "express";
import { SpecialtyController } from "./specialty.controller";

const router = Router()

router.post('/specialties', SpecialtyController.createSpecialty)
router.get('/specialties', SpecialtyController.getAllSpecialties)
router.delete('/specialties/:id', SpecialtyController.deleteSpecialty)
router.put('/specialties/:id', SpecialtyController.updateSpecialty)

export const SpecialtyRoutes = router