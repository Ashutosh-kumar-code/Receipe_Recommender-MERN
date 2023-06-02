import express from 'express';

import { welcomeController, registerUser, loginUser, deleteUser, listUser, searchUsers } from "../controllers/userController.js";
import { addReceipe, deleteReceipe, receipeList, searchList, showaReceipe, updateReceipe } from '../controllers/receipeController.js';


const router = express.Router();

router.get('/home', welcomeController);
router.post('/register', registerUser );
router.post('/login', loginUser );
//admin
router.delete('/profile/:id', deleteUser);
router.get('/userlist',listUser);
router.get('/usersearch/:key', searchUsers);

router.post('/addreceipe', addReceipe);
router.get('/receipelist', receipeList);
router.get('/search/:key', searchList);

//admin 
router.put('/receipe/:id', updateReceipe);
router.delete('/receipe/:id', deleteReceipe);
router.get('/receipe/:id', showaReceipe);

export default router;

