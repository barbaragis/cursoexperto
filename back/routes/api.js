var express = require('express');
var router = express.Router();
var promocionesModel = require('../models/promocionesModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/promociones', async function(req, res, next) {
  let promociones = await promocionesModel.getPromociones();
  
    promociones = promociones.map(promociones => {
      if (promociones.img_id) {
        const imagen = cloudinary.url(promociones.img_id, {
          width:800,
          height:400,
          crop:'fill'
        });
        return {
          ...promociones,
          imagen
        }
      }else {
        return {
          ...promociones,
          imagen: ''
        }
      }
    });


    res.json(promociones);
});

router.post('/contacto' , async (req,res) =>{
  const mail = {
    to: 'gissibarbara@gmail.com',
    subjet : 'Contacto web',
    html : `${req.body.nombre} se contactó a traves de la web y solicita más información a este correo ${req.body.email} <br> 
    Realizo el siguiente comentario :  ${req.body.mensaje} <br>
    Su teléfono es : ${req.body.telefono}`
  }

  const transport = nodemailer.createTransport({
    host : process.env.SMTP_HOST,
    port : process.env.SMTP_PORT,
    auth : {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  await transport.sendMail(mail)

  res.status(201).json({
    error: false,
    message: 'Su mensaje ha sido enviado con éxito. Nos contactaremos a la brevedad'
  });
})

module.exports = router;