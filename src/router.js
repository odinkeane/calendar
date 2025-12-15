import readMultipleFile from "./readfiles.js"
import { Router } from "express"

const router = Router()

router.get("/get-data", (req, res) => {
    readMultipleFile().then(data => {
        return res.status(200).json({ data })
    })
})

export default router