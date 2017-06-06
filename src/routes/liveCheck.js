import express from 'express';
import rp from 'request-promise';

const router = new express.Router();

/**
 * @swagger
 * /livecheck:
 *  get:
 *    summary: A healthcheck route for the service
 *    tags:
 *      - HealthCheck
 *    description: Will return 200 when server is operational.
 *    responses:
 *      200:
 *        description: Operational.
 *        schema:
 *          type: object
 *          properties:
 *            status:
 *              type: string
 */
const options = {
  uri: 'https://jsonplaceholder.typicode.com/posts',
  json: true
};

router.get('/', async (req, res) => {
  const foo = ['a', 'b', 'c'];
  if (foo.find(m => m === 'd')) {
    res.send('wow');
  }

  try {
    const posts = await rp(options);
    res.send(posts);
  } catch (err) {
    res.send(err);
  }
});

export default router;
