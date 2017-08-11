module.exports = {

  getInfo : (req, res) => {
    
 
      const dbInstance = app.get('db');
      console.log(req.params)
      dbInstance.run(`select * from articles where user_id = '${req.params.uid}'`)
                .then( resp => {
                  res.status(200).send(resp)
                })
                .catch(console.error, "Error getting articles info")
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