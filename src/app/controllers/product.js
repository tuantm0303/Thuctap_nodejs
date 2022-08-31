import Product from "../models/product";

export const list = async (req, res) => {
  try {
    const products = await Product.find({}).exec();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({
      message: "Không có sản phẩm!",
    });
  }
};

export const read = async (req, res) => {
  const condition = { _id: req.params.id };
  try {
    const products = await Product.findOne(condition).exec();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({
      message: "Không có sản phẩm!",
    });
  }
};

export const add = async (req, res) => {
  const doc = req.body;
  try {
    const product = await new Product(doc).save();
    return res.status(200).json(product);
  } catch (error) {
    return res.status(400).json({
      message: "Không thêm được sản phẩm!",
    });
  }
};

export const edit = async (req, res) => {
  const condition = { _id: req.params.id };
  const doc = req.body;
  const option = { new: true };
  try {
    const product = await Product.findOneAndUpdate(
      condition,
      doc,
      option
    ).exec();
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({
      message: "Không sửa được sản phẩm!",
    });
  }
};

export const remove = async (req, res) => {
  const condition = { _id: req.params.id };
  try {
    const product = await Product.findOneAndDelete(condition);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({
      message: "Không xóa được sản phẩm!",
    });
  }
};