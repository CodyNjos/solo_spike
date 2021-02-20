import { useEffect } from "react";
import { useDispatch,  useSelector} from "react-redux"
import UploadForm from '../UploadForm/UploadForm'
import './ImageList.css'

function ImageList() {
    const images = useSelector(store => store.images)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'FETCH_IMAGES' })
    }, []);
    
    return(
        <>
        <UploadForm/><br/>
        {images.map(images => {
            return(
               <div className="imgs" key = {images.id}>
                  
                   <img src = {images.img_url}/>
               </div>
            )
        })
    }</>
    )
}
export default ImageList