"use server"

import { revalidatePath } from "next/cache"
import { connectToDatabase } from "../database/mongoose"
import { handleError } from "../utils"
import User from "../database/models/user.model"
import Image from "../database/models/image.model"

// file containing server actions for image manipulation

// ADD IMAGE TO DATABASE
export async function addImage({ image, userId, path }: AddImageParams) {
  try {
    await connectToDatabase()
    const author = await User.findById(userId)

    if (!author) throw new Error("User not found")
    const newImage = await Image.create({ ...image, author: author._id })

    revalidatePath(path)

    return JSON.parse(JSON.stringify(newImage))
  } catch (error) {
    handleError(error)
  }
}

// UPDATE IMAGE IN DATABASE
export async function updateImage({ image, userId, path }: UpdateImageParams) {
  try {
    await connectToDatabase()
    revalidatePath(path)
    return JSON.parse(JSON.stringify(image))
  } catch (error) {
    handleError(error)
  }
}

// DELETE IMAGE FROM DATABASE
export async function deleteImage(imageId: string) {
  try {
    await connectToDatabase()
    revalidatePath(path)
    return JSON.parse(JSON.stringify(image))
  } catch (error) {
    handleError(error)
  }
}

// GET IMAGE FROM DATABASE
export async function getImageById(imageId: string) {
  try {
    await connectToDatabase()
    revalidatePath(path)
    return JSON.parse(JSON.stringify(image))
  } catch (error) {
    handleError(error)
  }
}