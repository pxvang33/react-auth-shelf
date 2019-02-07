const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {
        queryText=(`SELECT * FROM "item";`)            
        pool.query(queryText).then(results => res.send(results.rows))
        .catch(error => {
            console.log('Item Get Error', error);
            res.sendStatus(500);
            res.send(req.user);
  })
}); // end Get Item request


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', rejectUnauthenticated, (req, res) => {
    const newItem = req.body;
    const queryText = `INSERT INTO "item" ("description", "image_url", "person_id")
                      VALUES ($1, $2, $3)`;
    const queryValues = [
      newItem.description,
      newItem.image_url,
      newItem.person_id
    ];
    pool.query(queryText, queryValues)
      .then(() => { res.sendStatus(201); })
      .catch((err) => {
        console.log('Error completing SELECT plant query', err);
        res.sendStatus(500);
    })
}); // end POST Item request


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    const queryText = 'DELETE FROM "item" WHERE id=$1';
    pool.query(queryText, [req.params.id])
      .then(() => { res.sendStatus(200); })
      .catch((err) => {
        console.log('Delete Error', err);
        res.sendStatus(500);
    })
});
 // end DELETE Item request


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', rejectUnauthenticated, (req, res) => {


});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;