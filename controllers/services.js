const db = require('../models');

const index = (req, res) => {
    db.Service.find({}, (err, foundServices) => {
        if (err) console.log('Error in services#index:', err);

        if(!foundServices.length) return res.status(200).json({ "message": "No services found in db" });

        res.status(200).json({ "services": foundServices });
    });
};

const show = (req, res) => {
    db.Service.findById(req.params.id, (err, foundService) => {
        if (err) console.log('Error in services#show:', err);

        if(!foundService) return res.status(200).json({ "message": "No service with that id found in db" });

        res.status(200).json({ "service": foundService });
    });
};

const create = (req, res) => {
    db.Service.create(req.body, (err, savedService) => {
        if (err) console.log('Error in services#create:', err);

        res.status(201).json({ "service": savedService });
    });
};

const update = (req, res) => {
    db.Service.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedService) => {
        if (err) console.log('Error in services#update:', err);

        if(!updatedService) return res.status(200).json({ "message": "No service with that id found in db" });

        res.status(200).json({ "service": updatedService});
    });
};

const destroy = (req, res) => {
    db.Service.findByIdAndDelete(req.params.id, (err, deletedService) => {
        if (err) console.log('Error in services#destroy:', err);

        if(!deletedService) return res.status(200).json({ "message": "No service with that id found in db" });

        res.status(200).json({ "service": deletedService });
    });
};


module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};
