const express = require("express");
const router = express.Router();

const employeeController = require("../controllers/employee.controller");

router.get("/test", employeeController.test);
router.post("/create", employeeController.employee_create);
router.get("/", employeeController.all_employee_details);
router.get("/:id", employeeController.employee_details);
router.put("/update/:id", employeeController.employee_update);
router.delete("/delete/:id", employeeController.employee_delete);

module.exports = router;
