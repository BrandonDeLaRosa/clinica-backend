const express = require ('express');
const cors = require ('cors');
const morgan = require ('morgan');
const db = require('./utils/database');
const DoctorRoutes = require('./routes/doctor.routes');
const PatientsRoutes = require('./routes/patients.routes')
const NutritionPlanRoutes = require ('./routes/nutritionPlan.routes');
const MessureRoutes = require ('./routes/messures.routes');
const Documents = require ('./models/documents.model');
const initModels = require('./models/initModels');
// const AuthRoutes = require('./routes/auth.route')

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

db.authenticate()
.then(() => {
    console.log('Conexion exitosa OK:)');
})
.catch ((error) => {
    console.log(error);
});

initModels();        
 
db.sync()
// db.sync({ force: true})         
db.sync({ force: false})        
// db.sync({ alter: true}) 

 .then(() => {
   console.log('Base de datos sincronizada. :)');
 })
  .catch((error) =>{
    console.log(error);
});

const PORT = 9000;

app.use(DoctorRoutes);
app.use(PatientsRoutes);
app.use(NutritionPlanRoutes);
app.use(MessureRoutes);
app.use(Documents);
// app.use(AuthRoutes);

app.get('/', (req,res) => { 
    res.send('welcome to my API');
});

app.listen(PORT ,() => {
    console.log(`Servidor escuchando el puerto ${PORT}`);
}); 