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
          width:960,
          height:200,
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
    html : `${req.body.nombre} se contacto a traves de la web y quiere mas informacion a este correo ${req.body.email} hizo el comentario ${req.body.mensaje} su tel es ${req.body.telefono}`
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
    message: 'mensaje enviado'
  });
})

module.exports = router;