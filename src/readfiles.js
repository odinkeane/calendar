import { promises as fs } from 'fs'
import 'dotenv/config'

const direction = process.env.FILE_DIRECTION ?? "./src/jsons/"

async function readMultipleFile() {
    const fileNames = await fs.readdir(direction);
    const asyncPromises = fileNames.map(async (file) => {
        const response = await fs.readFile(direction + file, "utf-8")
        return JSON.parse(response)
    })
    const result = await Promise.all(asyncPromises)
    return result
}

export default readMultipleFile