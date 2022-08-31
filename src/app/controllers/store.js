import Store from "../models/store";

export const list = async (req, res) => {
  try {
    const stores = await Store.find({}).exec();
    return res.status(200).json(stores);
  } catch (error) {
    return res.status(400).json({
      message: "Không có cửa hàng nào!",
    });
  }
};

export const read = async (req, res) => {
  const filter = { _id: req.params.id };
  try {
    const store = await Store.findOne(filter).exec();
    res.status(200).json(store);
  } catch (error) {
    res.status(400).json({
      message: "Không có cửa hàng nào!",
    });
  }
};

export const create = async (req, res) => {
  const doc = req.body;
  try {
    const store = await new Store(doc).save();
    return res.status(200).json(store);
  } catch (error) {
    return res.status(400).json({
      message: "Không thêm được cửa hàng!",
    });
  }
};

export const update = async (req, res) => {
  const filter = { _id: req.params.id };
  const doc = req.body;
  const option = { new: true };
  try {
    const store = await Store.findOneAndUpdate(filter, doc, option).exec();
    return res.status(200).json(store);
  } catch (error) {
    return res.status(400).json({
      message: "Không sửa được cửa hàng!",
    });
  }
};

export const remove = async (req, res) => {
  const filter = { _id: req.params.id };
  try {
    const store = await Store.findOneAndDelete(filter).exec();
    return res.status(200).json(store);
  } catch (error) {
    return res.status(400).json({
      message: "Không xóa được cửa hàng!",
    });
  }
};
