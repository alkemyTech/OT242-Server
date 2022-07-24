const {getEntries} = require('../utils/entries');

const getNews = async (req,res,next) => {
  try{
    const news = await getEntries(['type'], ['news'], ['name', 'image', 'createdAt']);
    return res.status(200).json(news);
  }catch(err){
    next(err);
  }
}

module.exports = { getNews }