module.exports = {

  getInfo : (req, res) => {
    
    if (req.params.actionCategory === 'bookmarks') {
      res.status(200).send('getinfo')
    }
  },

  addNew : (req, res) => {
    res.status(200).send('add')
  },

  delete : (req, res) => {
    res.status(200).send('del')
  },

  updateScore : (req, res) => {
    res.status(200).send('update')
  }

}