const router = require("express").Router();
const pool = require("../db");


//get all jobs
router.get('/', async (req, res) => {
    try {
        const allJobs = await pool.query("SELECT * FROM jobs")
        res.json(allJobs.rows);
    } catch (err) {
        console.error(err.message)
    }
});

//create one job
router.post('/', async (req, res) => {
    try {
        const { c_name, j_title, j_link, j_source } = req.body;
        const newJob = await pool.query(
            "INSERT INTO jobs (c_name, j_title, j_link, j_source) VALUES($1, $2, $3, $4) RETURNING *",
            [c_name, j_title, j_link, j_source]);

        res.json(newJob.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
});


//get one job
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const job = await pool.query(
            "SELECT * FROM jobs WHERE j_id = $1",
            [id]);
        res.json(job.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
});

//update a job company's name
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { c_name } = req.body;

        const updateCompanyName = await pool.query (
            "UPDATE jobs SET c_name = $1 WHERE j_id = $2",
            [c_name, id]);

        res.json("Company's name updated!")
    } catch (err) {
        console.error(err.message)
    }
});

//delete one job
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteJob = await pool.query(
            "DELETE FROM jobs WHERE j_id = $1",
            [id]);
        res.json("Job was deleted!")
    } catch (err) {
        console.error(err.message)
    }

});

module.exports = router;
