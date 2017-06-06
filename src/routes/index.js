import express from 'express';
import liveCheck from './liveCheck';
import item from './item';
import swaggerRedirect from './swaggerRedirect';

const router = new express.Router();

router.use('/', swaggerRedirect);
router.use('/liveCheck', liveCheck);
router.use('/v1/item/', item);

export default router;
