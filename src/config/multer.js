import multer from "multer"

//CONFIGURACIÓN DE MULTER PARA EL ALMACENAMIENTO DE ARCHIVOS E IMAGENES
const storage = multer.memoryStorage({
    destination: function(req, file, cb){
        let uploadPath = ''

        if(file.fieldname === 'profileImage'){
            uploadPath = 'upload/profiles'
        } else if (file.fieldname === 'productImage'){
            uploadPath = 'upload/products'
        } else {
            uploadPath = 'upload/documents'
        }

        cb(null, uploadPath)
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + '-' + file.originalname);
    }
})

export const upload = multer({ storage: storage });