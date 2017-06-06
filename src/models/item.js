const Item = {
  getMockItem: () => ({ id: 'mockItemId', name: 'mockItemName' })
};

/**
 * @swagger
 * definitions:
 *   Item:
 *     type: object
 *     properties:
 *       id:
 *         type: string
 *         default: itemId
 *       name:
 *         type: string
 *         default: itemName
 */
export default Item;
