module.exports = {

  getInfo : (req, res) => {
      const dbInstance = app.get('db');
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
    console.log('UID:', req.params.uid)
    console.log('URL:', req.params.id)
    const dbInstance = app.get('db');
    console.log("DELETE METHOD", req.params)
    dbInstance.run(`delete from articles where 
                    user_id = '${req.params.uid}' and
                    id = '${req.params.id}'`)
              .then( resp => {
                res.status(200).send(`${req.params.url} has been deleted.`)
              })
              .catch(console.error, 'Error deleting article')
    
  },

  updateScore : (req, res) => {
    res.status(200).send('update')
  }

}