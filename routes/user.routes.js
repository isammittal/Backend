import {Router} from 'express';

const userRouter = Router();

userRouter.get('/users', (req, res) => {
    res.send({title: 'GET all Users'})
});  
userRouter.get('/:id', (req, res) => {
    res.send({title: 'GET user details'})
});  
userRouter.post('/', (req, res) => {
    res.send({title: 'CREATE new User'})
});  
userRouter.put('/:id', (req, res) => {
    res.send({title: 'UPDATE User'})
});  
userRouter.delete('/:id', (req, res) => {
    res.send({title: 'DELETE user'})
}); 

export default userRouter;