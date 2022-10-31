import { Order, OrderLine, OrderReview } from "../models";
import mongoose from "mongoose";

export const list = async (req, res) => {
  try {
    const orders = await Order.find({}).exec();
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(400).json({
      message: "Không có đơn hàng nào!",
    });
  }
};

export const read = async (req, res) => {
  const filter = { _id: req.params.id };
  try {
    const order = await Order.findOne(filter).exec();
    return res.status(200).json(order);
  } catch (error) {
    return res.status(400).json({
      message: "Không có đơn hàng nào!",
    });
  }
};

export const create = async (req, res) => {
  const doc = req.body;
  try {
    const order = await new Order(doc).save();
    return res.status(200).json(order);
  } catch (error) {
    return res.status(400).json({
      message: "Không thêm được đơn hàng!",
    });
  }
};

export const update = async (req, res) => {
  const filter = { _id: req.params.id };
  const doc = req.body;
  const option = { new: true };
  try {
    const order = await Order.findOneAndUpdate(filter, doc, option).exec();
    return res.status(200).json(order);
  } catch (error) {
    return res.status(400).json({
      message: "Không sửa được đơn hàng!",
    });
  }
};

export const readReview = async (req, res) => {
  const filter = { _id: req.params.id };
  try {
    const orderId = await Order.findById(filter).exec();
    const orderLines = await OrderLine.find({ orderId })
      .select("-orderId")
      .exec();
    const pipeline = [
      {
        $match: {
          orderId: mongoose.Types.ObjectId(filter._id),
        },
      },
      {
        $lookup: {
          from: "products",
          localField: "product",
          foreignField: "sku",
          as: "product",
        },
      },
      {
        $unwind: {
          path: "$product",
        },
      },
      {
        $lookup: {
          from: "orderreviews",
          let: { orderId: "$orderId", product: "$product.sku" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    {
                      $eq: ["$orderId", "$$orderId"],
                    },
                    {
                      $eq: ["$product", "$$product"],
                    },
                  ],
                },
              },
            },
          ],
          as: "review",
        },
      },
      {
        $unwind: {
          path: "$review",
          preserveNullAndEmptyArrays: true,
        },
      },
    ];

    const productOrders = await OrderLine.aggregate(pipeline, orderLines);
    return res.status(200).json({
      status: 200,
      message: "Lấy danh sách đơn hàng thành công!",
      productOrders,
    });
  } catch (error) {
    return res.status(400).json({
      status: 400,
      message: "Không có đơn hàng!",
    });
  }
};

export const createReview = async (req, res) => {
  const filter = req.body.orderId;
  const doc = req.body.productOrders;
  const review = doc.map((item) => item);
  try {
    const addReview = await OrderReview.create(
      review.map((item) => ({
        ...item,
        orderId: filter,
      }))
    );

    return res.status(200).json({
      status: 200,
      message: "Thêm nhận xét thành công!",
      addReview,
    });
  } catch (error) {
    return res.status(400).json({
      status: 400,
      message: "Không thêm được nhận xét!",
    });
  }
};
