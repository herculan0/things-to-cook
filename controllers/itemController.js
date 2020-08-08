const mongoose = require('mongoose');
const item = mongoose.model('item');

exports.list_all_items = (req, res) => {
  item.find({}, (err, items) => {
    if (err) res.send(err);
    res.json(items);
  });
};

exports.create_a_item = (req, res) => {
  const item = new item(req.body);
  item.save((err, item) => {
    if (err) res.send(err);
    res.json({message: "Item successfully added!", item});
  });
};

exports.read_a_item = (req, res) => {
  item.findById(req.params.itemId, (err, item) => {
    if (err) res.send(err);
    res.json(item);
  });
};

exports.update_a_item = (req, res) => {
  item.findOneAndUpdate(
    { _id: req.params.itemId },
    req.body,
    { new: true },
    (err, item) => {
      if (err) res.send(err);
      res.json({ message: 'Item updated!', item});
    }
  );
};

exports.delete_a_item = (req, res) => {
  item.deleteOne({ _id: req.params.itemId }, err => {
    if (err) res.send(err);
    res.json({
      message: 'Item successfully deleted!',
     _id: req.params.itemId
    });
  });
};
