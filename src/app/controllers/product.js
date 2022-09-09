import { startSession } from "mongoose";
import { Product, ProductOnline, ProductStore } from "../models";

export const list = async (req, res) => {
  try {
    const products = await Product.find({}).exec();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(400).json({
      message: "Không có sản phẩm nào!",
    });
  }
};

export const read = async (req, res) => {
  const condition = { _id: req.params.id };
  try {
    const products = await Product.findOne(condition).exec();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(400).json({
      message: "Không có sản phẩm!",
    });
  }
};

export const create = async (req, res) => {
  const session = await startSession();
  try {
    // Get data
    const doc = req.body;
    const productOnlinePriceDoc = doc.productOnlinePrice;
    const listProductStorePriceDoc = doc.listProductStorePrice;

    // Delete data price
    delete doc.productOnlinePrice;
    delete doc.listProductStorePrice;

    // Start save data
    session.startTransaction();
    const product = await Product.create(doc);

    const productOnlinePrice = await ProductOnline.create({
      ...productOnlinePriceDoc,
      sku: product.sku,
    });

    let listProductStorePriceResponse = [];
    for (let productStorePriceDoc of listProductStorePriceDoc) {
      const productStorePrice = await ProductStore.create({
        ...productStorePriceDoc,
        sku: product.sku,
      });
      listProductStorePriceResponse.push(productStorePrice);
    }

    // Commit transaction
    await session.commitTransaction();
    session.endSession();

    // Response
    res.status(200).json({
      ...product,
      productOnlinePrice: productOnlinePrice,
      productStorePrice: listProductStorePriceResponse,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: "Không thêm được sản phẩm!",
    });
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};

export const update = async (req, res) => {
  const session = await startSession();
  try {
    // Get data
    const filter = { _id: req.params.id };
    const doc = req.body;
    const option = { upsert: true };
    const productOnlinePriceDoc = doc.productOnlinePrice;
    const listProductStorePriceDoc = doc.listProductStorePrice;

    // Delete data price
    delete doc.productOnlinePrice;
    delete doc.listProductStorePrice;

    // Start save data
    session.startTransaction();
    const product = await Product.updateOne(filter, doc, option);
    const skuDoc = { sku: doc.sku };
    const productOnlinePrice = await ProductOnline.updateOne(
      skuDoc,
      { ...productOnlinePriceDoc, sku: product.sku },
      option
    );

    let listProductStorePriceResponse = [];
    for (let productStorePriceDoc of listProductStorePriceDoc) {
      const productStorePrice = await ProductStore.updateOne(
        skuDoc,
        { ...productStorePriceDoc, sku: product.sku },
        option
      );
      listProductStorePriceResponse.map((item) =>
        item ? productStorePrice : null
      );
    }

    // Commit transaction
    await session.commitTransaction();
    session.endSession();

    // Response
    return res.status(200).json({
      ...product,
      productOnlinePrice: productOnlinePrice,
      productStorePrice: listProductStorePriceResponse,
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    res.status(400).json({
      status: 400,
      message: "Không sửa được sản phẩm!",
    });
  }
};

export const remove = async (req, res) => {
  const session = await startSession();
  try {
    // Get data
    const filter = { _id: req.params.id };

    // Start save data
    session.startTransaction();
    const product = await Product.findOneAndDelete(filter);

    const productOnlinePrice = await ProductOnline.findOneAndDelete({
      sku: product.sku,
    });

    const productStorePrice = await ProductStore.findOneAndDelete({
      sku: product.sku,
    });

    // Commit transaction
    await session.commitTransaction();
    session.endSession();

    // Response
    return res.status(200).json({
      message: "Xóa thành công!",
      ...product,
      productOnlinePrice,
      productStorePrice,
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    res.status(400).json({
      status: 400,
      message: "Không xóa được sản phẩm!",
    });
  }
};

export const search = async (req, res) => {
  const key = req.query.q;
  try {
    const result = await Product.find({ $text: { $search: key } }).exec();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      message: "Không tìm thấy sản phẩm!",
    });
  }
};
