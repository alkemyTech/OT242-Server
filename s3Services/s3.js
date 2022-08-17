const { S3Client, PutObjectCommand, Bucket, DeleteObjectCommand } = require("@aws-sdk/client-s3");
const uuid = require("uuid").v4;
const S3 = require('aws-sdk/clients/s3')
require("dotenv").config();
const multer = require('multer');

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
    if (file.mimetype.split("/")[0] === "image") {
        cb(null, true);
    } else {
        cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"), false);
    }
};

const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 1000000000, files: 2 },
});

const s3 = new S3();

const UploadImg = async (files) => {
    const params = files.map((file) => {
        return {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `uploads/${uuid()}`,
            Body: file.buffer,
        };
    });

    return await Promise.all(params.map((param) => s3.upload(param).promise()));
};



const VerifyMulterError = (error) => {
    let er = ""
    if (error instanceof multer.MulterError) {
        if (error.code === "LIMIT_FILE_SIZE") {
            er = "file is too large"
        };

        if (error.code === "LIMIT_FILE_COUNT") {
            er = "File limit reached"
        }

        if (error.code === "LIMIT_UNEXPECTED_FILE") {
            er = "File must be an image"
        }
    }
    return er;
}

const deleteImg = async (req) => {
    var params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: 'uploads/' + req.params.id,
    };
    await s3.deleteObject(params, function (err, data) {
        if (err) return (err);
        else return (data);
    });
}
module.exports = {
    upload: upload,
    UploadImg: UploadImg,
    VerifyMulterError: VerifyMulterError,
    deleteImg: deleteImg
};