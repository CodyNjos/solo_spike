import ReactFilestack from 'filestack-react';
import { useDispatch } from 'react-redux';
function UploadForm() {
    const dispatch = useDispatch();
    const basicOptions = {
        accept: ['image/*'],
        fromSources: ['local_file_system'],
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
        <ReactFilestack
            apikey={process.env.REACT_APP_FILESTACK_API_KEY}
            buttonText="Upload Image"
            buttonClass="ui medium button gray"
            options={basicOptions}
            onSuccess={onSuccess}
            onError={onError}

        />)
}
export default UploadForm