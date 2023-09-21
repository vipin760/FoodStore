import { Router } from "express";
import asyncHandler from "express-async-handler";
import sample_foods, { sample_tags } from "../data";
import { FoodModel } from "../models/food.model";
import { UserModel } from "../models/user.model";
const router = Router();

router.get(
  "/seed",
  asyncHandler(async (req, res) => {
    console.log("working 1");

    const foodCount = await FoodModel.countDocuments();
    console.log(foodCount);

    if (foodCount > 0) {
      console.log("seed is already done");
      res.send("seed is already done");
      return;
    }
    await FoodModel.create(sample_foods);
    console.log("Seed is done");
    res.send("Seed is done");
  })
);
//////////////////////////////////////////////////////////////////////////////

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const foods = await FoodModel.find();
    res.send(foods);
  })
);

/////////////////////////////////////////////////////////////////////////////////////////////

router.get(
  "/search/:searchTerm",
  asyncHandler(async (req, res) => {

    const searchRegEx = new RegExp(req.params.searchTerm, "i");
    const foods = await FoodModel.find({ name: { $regex: searchRegEx } });

    res.send(foods);
  })
);

/////////////////////////////////////////////////////////////////////////////////////////////

router.get(
  "/tags", 
  asyncHandler(async (req, res) => {
    const tags = await FoodModel.aggregate([
      {
        $unwind: "$tags",
      },
      {
        $group: {
          _id: "$tags",
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          name: "$_id",
          count: "$count",
        },
      },
    ]).sort({count: -1});

    const all = {
      name:'All',
      count: await FoodModel.countDocuments()
    }
    tags.unshift(all)
    
    res.send(tags);
  })
);

/////////////////////////////////////////////////////////////////////////////////////////////

router.get("/tag/:tagName", asyncHandler(
  async(req, res) => {
    const tagName = req.params.tagName;
    const foods = await FoodModel.find({tags:tagName})
    res.send(foods);
  })
);

/////////////////////////////////////////////////////////////////////////////////////////////

router.get("/:foodId", asyncHandler(
  async(req, res) => {
    const food = await FoodModel.findById(req.params.foodId) 
    res.send(food);
  })
);

/////////////////////////////////////////////////////////////////////////////////////////////

export default router;
