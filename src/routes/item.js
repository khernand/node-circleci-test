import express from 'express';
import Item from '../models';

const router = new express.Router();


/**
 * @swagger
 * /v1/item:
 *  get:
 *    summary: Get the mock item
 *    tags:
 *      - Item
 *    description: Get the mock item object.
 *    responses:
 *      200:
 *        description: The task was completed successfully.
 *        schema:
 *          $ref: '#/definitions/Item'
 */
router.get('/', async (req, res) => {
  const item = Item.getMockItem();
  res.send(item);
});

export default router;
