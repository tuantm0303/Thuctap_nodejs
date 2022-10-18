import { OrderStatus } from "../models";

export const list = async (req, res) => {
  try {
    const orderStatuses = await OrderStatus.find({}).exec();
    return res.status(200).json(orderStatuses);
  } catch (error) {
    return res.status(400).json({
      message: "Không có đơn hàng nào!",
    });
  }
};

export const read = async (req, res) => {
  const filter = { _id: req.params.id };
  try {
    const orderStatus = await OrderStatus.findOne(filter).exec();
    return res.status(200).json(orderStatus);
  } catch (error) {
    return res.status(400).json({
      message: "Không có đơn hàng nào!",
    });
  }
};

export const create = async (req, res) => {
  const doc = req.body;
  try {
    const orderStatus = await new OrderStatus(doc).save();
    return res.status(200).json(orderStatus);
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
    const orderStatus = await OrderStatus.findOneAndUpdate(
      filter,
      doc,
      option
    ).exec();
    return res.status(200).json(orderStatus);
  } catch (error) {
    return res.status(400).json({
      message: "Không sửa được đơn hàng!",
    });
  }
};
