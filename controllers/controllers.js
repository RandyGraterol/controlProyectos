const nodemailer= require('nodemailer');
/////////////////////////////////////////////////////////
const transporter = nodemailer.createTransport({
	service:'Gmail',
	auth:{
		user:'elrandygraterol@gmail.com',
		pass:'swkfueydbdbkesmc'
	}
});
/////////////////////////////////////////////////////////////////
const index = (req,res)=>{
	try{
		res.render('index');
	}catch(error){
		console.error(error.message);	
		res.status(500).json({status:false,error:error.message});
	}
}
////////////////////////////////////////////////////////////////
const otro = (req,res)=>{
	try{

	}catch(error){
		console.error(error.message);	
		res.status(500).json({status:false,error:error.message});	
	}
}
//////////////////////////////////////////////////////////////
const contactoCorreo = async(req,res)=>{
	try{
		const {name,email,subject,message} = req.body;
		const mensaje = {
			from:'elrandygraterol@gmail.com',
			to:'soapdelinger@gmail.com',
			subject:subject,
			text:message
		}
		transporter.sendMail(mensaje,(error,info)=>{
			if(error){
				console.log(error.message);
			}else{
				console.log(`Mensaje de aprobacion enviado ${info.response}`);
				res.json({status:true});
			}
		})

	}catch(error){
		console.error(error.message);	
		res.status(500).json({status:false,error:error.message});
	}
};
//////////////////////////////////////////////////////////////
module.exports = {
	index,otro,contactoCorreo
}