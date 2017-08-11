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
    const dbInstance = app.get('db');
    console.log("DELETE METHOD", req.params)
    dbInstance.run(`delete from articles where 
                    user_id = '${req.params.uid}' and
                    url = '${req.params.url}'`)
    res.status(200).send(req.params.url)
  },

  updateScore : (req, res) => {
    res.status(200).send('update')
  }

}