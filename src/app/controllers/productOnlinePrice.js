import { ProductOnline } from "../models";

export const list = async (req, res) => {
  try {
    const products = await ProductOnline.find({}).exec();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(400).json({
      message: "Không có sản phẩm!",
    });
  }
};

export const read = async (req, res) => {
  const filter = { _id: req.params.id };
  try {
    const products = await ProductOnline.findOne(filter).exec();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(400).json({
      message: "Không có sản phẩm!",
    });
  }
};

export const create = async (req, res) => {
  const doc = req.body;
  try {
    const product = await new ProductOnline(doc).save();
    return res.status(200).json(product);
  } catch (error) {
    return res.status(400).json({
      message: "Không thêm được sản phẩm!",
    });
  }
};

export const update = async (req, res) => {
  const filter = { _id: req.params.id };
  const doc = req.body;
  const option = { new: true };
  try {
    const product = await ProductOnline.findOneAndUpdate(
      filter,
      doc,
      option
    ).exec();
    return res.status(200).json(product);
  } catch (error) {
    return res.status(400).json({
      message: "Không sửa được sản phẩm!",
    });
  }
};

export const remove = async (req, res) => {
  const filter = { _id: req.params.id };
  try {
    const product = await ProductOnline.findOneAndDelete(filter);
    return res.status(200).json(product);
  } catch (error) {
    return res.status(400).json({
      message: "Không xóa được sản phẩm!",
    });
  }
};
