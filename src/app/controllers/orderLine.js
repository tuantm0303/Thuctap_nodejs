import { OrderLine } from "../models";

export const list = async (req, res) => {
  try {
    const orderLines = await OrderLine.find({}).exec();
    return res.status(200).json(orderLines);
  } catch (error) {
    return res.status(400).json({
      message: "Không có đơn hàng nào!",
    });
  }
};

export const read = async (req, res) => {
  const filter = { _id: req.params.id };
  try {
    const orderLine = await OrderLine.findOne(filter).exec();
    return res.status(200).json(orderLine);
  } catch (error) {
    return res.status(400).json({
      message: "Không có đơn hàng nào!",
    });
  }
};

export const create = async (req, res) => {
  const doc = req.body;
  try {
    const orderLine = await new OrderLine(doc).save();
    return res.status(200).json(orderLine);
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
    const orderLine = await OrderLine.findOneAndUpdate(
      filter,
      doc,
      option
    ).exec();
    return res.status(200).json(orderLine);
  } catch (error) {
    return res.status(400).json({
      message: "Không sửa được đơn hàng!",
    });
  }
};
