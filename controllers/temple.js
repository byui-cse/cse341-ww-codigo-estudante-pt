const db = require('../models');
const Temple = db.temples;

const apiKey =
  'Ezl0961tEpx2UxTZ5v2uKFK91qdNAr5npRlMT1zLcE3Mg68Xwaj3N8Dyp1R8IvFenrVwHRllOUxF0Og00l0m9NcaYMtH6Bpgdv7N';

exports.create = (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({ message: 'Content can not be empty!' });
  }

  const temple = new Temple({
    temple_id: req.body.temple_id,
    name: req.body.name,
    description: req.body.description,
    location: req.body.location,
    dedicated: req.body.dedicated,
    additionalInfo: req.body.additionalInfo,
  });

  temple
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Temple.',
      });
    });
};

exports.findAll = (req, res) => {
  if (req.header('apiKey') !== apiKey) {
    return res.status(401).send('Invalid apiKey, please read the documentation.');
  }

  Temple.find(
    {},
    {
      temple_id: 1,
      name: 1,
      location: 1,
      dedicated: 1,
      additionalInfo: 1,
      _id: 0,
    }
  )
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving temples.',
      });
    });
};

exports.findOne = (req, res) => {
  const temple_id = Number(req.params.temple_id);

  if (req.header('apiKey') !== apiKey) {
    return res.status(401).send('Invalid apiKey, please read the documentation.');
  }

  Temple.findOne({ temple_id })
    .then((data) => {
      if (!data) {
        return res
          .status(404)
          .send({ message: 'Not found Temple with id ' + temple_id });
      }

      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Temple with temple_id=' + temple_id,
      });
    });
};

exports.update = (req, res) => {
  const temple_id = Number(req.params.temple_id);

  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).send({
      message: 'Data to update can not be empty!',
    });
  }

  Temple.findOneAndUpdate({ temple_id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: 'Cannot update Temple with temple_id=' + temple_id,
        });
      }

      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Temple with temple_id=' + temple_id,
      });
    });
};

exports.delete = (req, res) => {
  const temple_id = Number(req.params.temple_id);

  Temple.findOneAndDelete({ temple_id })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: 'Cannot delete Temple with temple_id=' + temple_id,
        });
      }

      res.send({
        message: 'Temple was deleted successfully!',
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Temple with temple_id=' + temple_id,
      });
    });
};
