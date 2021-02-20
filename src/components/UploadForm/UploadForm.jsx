import ReactFilestack from 'filestack-react';
import { useDispatch } from 'react-redux';
import {useState} from 'react'
function UploadForm() {
    const[ img, setImg] = useState({
        name: '',
        img_url: ''
    })
    const dispatch = useDispatch();
    const basicOptions = {
        accept: ['image/*'],
        maxSize: 1024 * 1024,
        maxFiles: 1,
    }
    const onSuccess = (result) => {
        console.log('Result from filestack success: ', result);
        const img = { name: result.filesUploaded[0].filename, img_url: result.filesUploaded[0].url }
        dispatch({ type: 'ADD_IMAGES', payload: img })
    }

    const onError = (error) => {
        alert('Error Uploading' + error)
        console.error('error', error);
    }

    return (
        <div className='fileStack'>
        <ReactFilestack
            apikey={process.env.REACT_APP_FILESTACK_API_KEY}
            buttonText="Upload Image"
            options={basicOptions}
            onSuccess={onSuccess}
            onError={onError}
        />
        </div>
      
        
         )
       
}
export default UploadForm