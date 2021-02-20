import ReactFilestack from 'filestack-react';
import {useState} from "react";
import { useDispatch } from 'react-redux';
function UploadForm() {
    const dispatch = useDispatch();
    const basicOptions = {
        accept: ['image/*'],
        fromSources: ['local_file_system'],
        maxSize: 1024 * 1024,
        maxFiles: 1,
     }
     const [img_url, setfileUrl] = useState('')
     const [name, setName] = useState('')
     const img = {name, img_url}
    const onSuccess = (result) => {
        console.log('Result from filestack success: ', result);
        setfileUrl( result.filesUploaded[0].url )
        setName( result.filesUploaded[0].filename)
        dispatch({type:'ADD_IMAGES' , payload:img})
        }
    // const onError = (error) => {
    //     this.props.dispatch({ type: 'UPLOAD_ALERT', payload: { message: 'Error uploading file', alert: 'alert-error' } });
    //     console.error('error', error);
    //  }

     return(
     <ReactFilestack
     apikey={process.env.REACT_APP_FILESTACK_API_KEY}
     buttonText="Upload Image"
     buttonClass="ui medium button gray"
     options={basicOptions}
     onSuccess={onSuccess}
     //onError={onError}
     
  />)
}
export default UploadForm