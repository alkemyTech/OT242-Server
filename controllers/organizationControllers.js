// Get the testimonials
const getOrganizationData = async (req, res) => {
    
    // Petition test
  const campos = {
    name: 'Tomás',
    img: "img.png",
    phone: '3612536483',
    address: 'san fernando 3522',
    welcomeText: 'welcome to our organization'
  }


  res.json(campos)

}



module.exports = {
    getOrganizationData,
}

